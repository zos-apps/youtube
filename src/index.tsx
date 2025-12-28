import React from 'react';

interface YouTubeProps { onClose: () => void; }

const YouTube: React.FC<YouTubeProps> = ({ onClose }) => (
  <div className="h-full w-full bg-[#0f0f0f]">
    <iframe src="https://www.youtube.com/" className="w-full h-full border-0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube" />
  </div>
);

export default YouTube;
