
import React from 'react';

const Viewport = ({ videoSrc }) => {
  return (
    <div className="bg-gray-800 rounded-lg h-60 flex items-center justify-center text-xl">
      <video controls className="w-full h-full object-cover rounded-lg">
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Viewport;
