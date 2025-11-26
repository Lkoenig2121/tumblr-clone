'use client';

import { useState, useEffect, useRef } from 'react';

interface VideoPostProps {
  id: string;
  username: string;
  avatar?: string;
  content?: string;
  videoUrl: string;
  thumbnail?: string;
  tags?: string[];
  notes: number;
  reblogs: number;
  likes: number;
  duration?: string;
}

export default function VideoPost({ 
  id, 
  username, 
  avatar, 
  content, 
  videoUrl, 
  thumbnail, 
  tags, 
  notes, 
  reblogs, 
  likes,
  duration 
}: VideoPostProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
  };

  // Intersection Observer to detect when video enters viewport
  useEffect(() => {
    const currentRef = videoContainerRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            setIsPlaying(true);
          } else {
            setIsInView(false);
            setIsPlaying(false);
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the video is visible
        rootMargin: '0px',
      }
    );

    observer.observe(currentRef);

    return () => {
      observer.unobserve(currentRef);
    };
  }, []);

  const getAvatarColor = () => {
    const colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500', 'bg-pink-500'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition border border-gray-200">
      <div className="p-4 md:p-5">
        <div className="flex items-center space-x-3 mb-4">
          <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full ${getAvatarColor()} flex items-center justify-center text-white font-bold text-lg`}>
            {username[0].toUpperCase()}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-gray-900 font-semibold text-sm md:text-base truncate">{username}</p>
          </div>
          <button className="text-gray-500 hover:text-gray-700 flex-shrink-0">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
          </button>
        </div>

        {content && (
          <div className="text-gray-900 mb-4">
            <p className="leading-relaxed text-sm md:text-base whitespace-pre-wrap">{content}</p>
          </div>
        )}

        {/* Video Container */}
        <div ref={videoContainerRef} className="relative mb-4 rounded-lg overflow-hidden bg-black">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            {isPlaying && isInView ? (
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`${videoUrl}${videoUrl.includes('?') ? '&' : '?'}autoplay=1&mute=1&loop=0&controls=1&modestbranding=1&rel=0`}
                title={`Video by ${username}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{ pointerEvents: 'auto' }}
              />
            ) : (
              <div 
                className="absolute inset-0 bg-cover bg-center cursor-pointer group"
                style={{ backgroundImage: thumbnail ? `url(${thumbnail})` : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
                onClick={() => {
                  setIsPlaying(true);
                  setIsInView(true);
                }}
              >
                {/* Play Button Overlay - Tumblr Style */}
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition flex items-center justify-center">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white bg-opacity-95 group-hover:bg-opacity-100 transition flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform">
                    <svg className="w-10 h-10 md:w-12 md:h-12 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                </div>
                {duration && (
                  <div className="absolute bottom-3 right-3 bg-black bg-opacity-80 text-white text-sm px-2.5 py-1.5 rounded font-medium">
                    {duration}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span key={index} className="text-xs md:text-sm text-tumblr-blue hover:underline cursor-pointer transition">
                #{tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between pt-3 border-t border-gray-200">
          <button className="flex items-center space-x-1 md:space-x-2 text-gray-600 hover:text-gray-900 transition">
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
            </svg>
            <span className="text-xs md:text-sm text-gray-700">{notes}</span>
          </button>

          <button className="flex items-center space-x-1 md:space-x-2 text-gray-600 hover:text-green-600 transition">
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
              <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
            </svg>
            <span className="text-xs md:text-sm text-gray-700">{reblogs}</span>
          </button>

          <button 
            onClick={handleLike}
            className={`flex items-center space-x-1 md:space-x-2 transition ${isLiked ? 'text-red-500' : 'text-gray-600 hover:text-red-500'}`}
          >
            <svg className="w-4 h-4 md:w-5 md:h-5" fill={isLiked ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span className="text-xs md:text-sm text-gray-700">{likeCount > 1000 ? `${Math.floor(likeCount / 1000)}K` : likeCount}</span>
          </button>

          <button className="text-gray-600 hover:text-gray-900 transition">
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

