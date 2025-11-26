'use client';

interface TrendingBlogProps {
  name: string;
  description: string;
  avatar?: string;
}

export default function TrendingBlog({ name, description, avatar }: TrendingBlogProps) {
  const getAvatarColor = () => {
    const colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500', 'bg-pink-500'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-tumblr-darker transition cursor-pointer">
      <div className={`w-10 h-10 rounded-full ${getAvatarColor()} flex items-center justify-center text-white font-bold flex-shrink-0`}>
        {name[0].toUpperCase()}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <p className="text-white font-semibold text-sm truncate">{name}</p>
          <button className="text-tumblr-blue hover:text-blue-400 text-sm font-medium whitespace-nowrap ml-2">
            Follow
          </button>
        </div>
        <p className="text-gray-400 text-xs truncate">{description}</p>
      </div>
      <button className="text-gray-400 hover:text-white ml-2">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
        </svg>
      </button>
    </div>
  );
}

