'use client';

interface TrendingTagProps {
  rank: number;
  name: string;
  subtitle?: string;
  color: string;
  image?: string;
}

export default function TrendingTag({ rank, name, subtitle, color, image }: TrendingTagProps) {
  return (
    <div 
      className={`${color} rounded-lg p-4 cursor-pointer hover:opacity-90 transition relative overflow-hidden`}
      style={{ minHeight: '100px' }}
    >
      {image && (
        <div className="absolute right-2 bottom-2 w-16 h-16 rounded overflow-hidden opacity-80">
          <div className="w-full h-full bg-black bg-opacity-30"></div>
        </div>
      )}
      <div className="relative z-10">
        <div className="flex items-center mb-2">
          <span className="bg-yellow-400 text-black font-bold rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">
            {rank}
          </span>
          <span className="font-bold text-white text-lg">{name}</span>
        </div>
        {subtitle && (
          <p className="text-white text-sm opacity-90">#{subtitle}</p>
        )}
      </div>
    </div>
  );
}

