import React, { useState } from 'react';

interface YouTubeProps { onClose: () => void; }

const videos = [
  { id: 1, title: 'Building a Modern Web App in 2025', channel: 'Tech With Tim', views: '1.2M', time: '24:15', thumb: 'from-red-500 to-orange-500' },
  { id: 2, title: 'The Future of AI: What to Expect', channel: 'Fireship', views: '890K', time: '12:08', thumb: 'from-blue-500 to-purple-500' },
  { id: 3, title: 'React 19 - Everything You Need to Know', channel: 'Theo', views: '654K', time: '18:42', thumb: 'from-cyan-500 to-blue-500' },
  { id: 4, title: 'Why TypeScript is Taking Over', channel: 'Traversy Media', views: '432K', time: '15:30', thumb: 'from-blue-600 to-indigo-600' },
  { id: 5, title: 'CSS Tips You Should Know', channel: 'Kevin Powell', views: '321K', time: '11:22', thumb: 'from-pink-500 to-rose-500' },
  { id: 6, title: 'System Design Interview Prep', channel: 'NeetCode', views: '567K', time: '45:00', thumb: 'from-green-500 to-teal-500' },
  { id: 7, title: 'Music Production for Beginners', channel: 'Andrew Huang', views: '234K', time: '20:15', thumb: 'from-purple-500 to-pink-500' },
  { id: 8, title: 'Travel Vlog: Japan 2025', channel: 'Lost LeBlanc', views: '789K', time: '28:33', thumb: 'from-amber-500 to-red-500' },
];

const YouTube: React.FC<YouTubeProps> = ({ onClose }) => {
  const [search, setSearch] = useState('');
  const [selectedVideo, setSelectedVideo] = useState<typeof videos[0] | null>(null);

  if (selectedVideo) {
    return (
      <div className="h-full flex flex-col bg-[#0f0f0f] text-white">
        {/* Header */}
        <div className="flex items-center gap-4 p-3 bg-[#0f0f0f]">
          <button onClick={() => setSelectedVideo(null)} className="text-2xl">←</button>
          <div className="flex-1 flex justify-center">
            <div className="flex items-center gap-2 text-xl font-bold text-red-600">
              <span>▶</span> YouTube
            </div>
          </div>
        </div>
        
        {/* Video player */}
        <div className={`aspect-video bg-gradient-to-br ${selectedVideo.thumb} flex items-center justify-center`}>
          <button className="w-20 h-20 bg-black/50 rounded-full flex items-center justify-center text-4xl">▶</button>
        </div>
        
        {/* Video info */}
        <div className="p-4">
          <h1 className="text-xl font-bold mb-2">{selectedVideo.title}</h1>
          <div className="flex items-center gap-4 text-sm text-white/60 mb-4">
            <span>{selectedVideo.views} views</span>
            <span>•</span>
            <span>2 days ago</span>
          </div>
          <div className="flex items-center gap-3 py-3 border-b border-white/10">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full"></div>
            <div>
              <div className="font-medium">{selectedVideo.channel}</div>
              <div className="text-xs text-white/60">1.2M subscribers</div>
            </div>
            <button className="ml-auto px-4 py-2 bg-white text-black rounded-full font-medium text-sm">Subscribe</button>
          </div>
          <div className="flex gap-2 mt-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm">👍 Like</button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm">👎 Dislike</button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm">↗ Share</button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm">💾 Save</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col bg-[#0f0f0f] text-white">
      {/* Header */}
      <div className="flex items-center gap-4 p-3 border-b border-white/10">
        <div className="flex items-center gap-2 text-xl font-bold text-red-600">
          <span>▶</span> YouTube
        </div>
        <div className="flex-1 flex justify-center">
          <div className="flex w-full max-w-lg">
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search"
              className="flex-1 px-4 py-2 bg-[#121212] border border-white/20 rounded-l-full text-sm focus:outline-none focus:border-blue-500"
            />
            <button className="px-6 bg-white/10 border border-l-0 border-white/20 rounded-r-full">🔍</button>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="text-xl">🔔</button>
          <div className="w-8 h-8 bg-purple-600 rounded-full"></div>
        </div>
      </div>

      {/* Categories */}
      <div className="flex gap-2 p-3 overflow-x-auto">
        {['All', 'Music', 'Gaming', 'News', 'Live', 'Coding', 'Recently uploaded'].map(cat => (
          <button key={cat} className={`px-3 py-1.5 rounded-lg text-sm whitespace-nowrap ${cat === 'All' ? 'bg-white text-black' : 'bg-white/10 hover:bg-white/20'}`}>
            {cat}
          </button>
        ))}
      </div>

      {/* Video grid */}
      <div className="flex-1 overflow-auto p-3">
        <div className="grid grid-cols-4 gap-4">
          {videos.map(video => (
            <div key={video.id} onClick={() => setSelectedVideo(video)} className="cursor-pointer group">
              <div className={`aspect-video bg-gradient-to-br ${video.thumb} rounded-xl relative overflow-hidden`}>
                <div className="absolute bottom-2 right-2 bg-black/80 px-1.5 py-0.5 rounded text-xs">{video.time}</div>
              </div>
              <div className="flex gap-2 mt-2">
                <div className="w-9 h-9 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex-shrink-0"></div>
                <div>
                  <h3 className="font-medium text-sm line-clamp-2 group-hover:text-blue-400">{video.title}</h3>
                  <p className="text-xs text-white/60 mt-1">{video.channel}</p>
                  <p className="text-xs text-white/60">{video.views} views • 2 days ago</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YouTube;
