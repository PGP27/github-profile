import React from 'react';

const Loading = () => (
  <div className="flex flex-col justify-center items-center">
    <div className="h-48 w-48 flex justify-center items-center rounded-full border-t border-b border-purple-project animate-spin" />
    <span className="absolute text-2xl">Loading...</span>
  </div>
);

export default Loading;
