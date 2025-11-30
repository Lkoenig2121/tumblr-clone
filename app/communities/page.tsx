"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import Sidebar from "@/components/Sidebar";

export default function Communities() {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login");
    }
  }, [user, isLoading, router]);

  if (isLoading || !user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-tumblr-blue"></div>
      </div>
    );
  }

  const communities = [
    {
      id: 1,
      name: "Artists & Creators",
      description: "A space for artists to share their work and get feedback",
      members: 45200,
      posts: 128500,
      image: "🎨",
      tags: ["art", "digital art", "illustration", "creative"],
    },
    {
      id: 2,
      name: "Fanfiction Writers",
      description: "Share your stories, get writing tips, and connect with fellow writers",
      members: 32100,
      posts: 89200,
      image: "✍️",
      tags: ["fanfiction", "writing", "stories", "creative writing"],
    },
    {
      id: 3,
      name: "Gaming Community",
      description: "Discuss your favorite games, share gameplay, and find gaming buddies",
      members: 67800,
      posts: 245000,
      image: "🎮",
      tags: ["gaming", "video games", "esports", "streaming"],
    },
    {
      id: 4,
      name: "Book Club",
      description: "Monthly book discussions, recommendations, and literary analysis",
      members: 28900,
      posts: 56300,
      image: "📚",
      tags: ["books", "reading", "literature", "book club"],
    },
    {
      id: 5,
      name: "Photography Enthusiasts",
      description: "Share your photos, learn techniques, and appreciate visual art",
      members: 41500,
      posts: 112800,
      image: "📸",
      tags: ["photography", "photos", "camera", "visual art"],
    },
    {
      id: 6,
      name: "Music Lovers",
      description: "Discover new music, share playlists, and discuss your favorite artists",
      members: 53200,
      posts: 178900,
      image: "🎵",
      tags: ["music", "songs", "artists", "playlists"],
    },
    {
      id: 7,
      name: "Anime & Manga",
      description: "Discuss anime series, manga reviews, and fan theories",
      members: 71200,
      posts: 289400,
      image: "⛩️",
      tags: ["anime", "manga", "japanese culture", "otaku"],
    },
    {
      id: 8,
      name: "Mental Health Support",
      description: "A safe space to share experiences and support each other",
      members: 19800,
      posts: 43200,
      image: "💚",
      tags: ["mental health", "support", "wellness", "self care"],
    },
  ];

  return (
    <div className="min-h-screen bg-tumblr-dark">
      <Sidebar />

      <div className="ml-16 md:ml-64">
        {/* Header */}
        <div className="sticky top-0 z-30 bg-tumblr-darker border-b border-gray-700">
          <div className="px-4 md:px-6 py-6">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Communities
            </h1>
            <p className="text-gray-400 text-sm md:text-base">
              Find your people and explore communities based on your interests
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto p-4 md:p-6">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search communities..."
                className="w-full px-4 py-3 pl-12 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-tumblr-blue focus:border-transparent"
              />
              <svg
                className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Communities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {communities.map((community) => (
              <div
                key={community.id}
                className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-tumblr-blue transition-all hover:shadow-xl"
              >
                <div className="p-6">
                  {/* Icon */}
                  <div className="text-5xl mb-4">{community.image}</div>

                  {/* Community Info */}
                  <h3 className="text-xl font-bold text-white mb-2">
                    {community.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {community.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-between mb-4 text-sm">
                    <div className="text-gray-400">
                      <span className="text-white font-semibold">
                        {community.members.toLocaleString()}
                      </span>{" "}
                      members
                    </div>
                    <div className="text-gray-400">
                      <span className="text-white font-semibold">
                        {community.posts.toLocaleString()}
                      </span>{" "}
                      posts
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {community.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Join Button */}
                  <button className="w-full bg-tumblr-blue hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition">
                    Join Community
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Create Community CTA */}
          <div className="mt-12 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Can't find your community?
            </h2>
            <p className="text-white text-opacity-90 mb-6">
              Create your own space and bring together people who share your interests
            </p>
            <button className="bg-white text-purple-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition">
              Create a Community
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

