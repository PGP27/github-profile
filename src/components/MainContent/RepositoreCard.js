import React from 'react';

const RepositoreCard = ({ name, description, language, link }) => {
  return (
    <a
      href={ link }
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 my-2 mx-8 rounded-lg transition bg-white-project border border-white hover:border-purple-project"
    >
      <div className="h-full flex flex-col text-sm">
        <h3 className="p-2 text-purple-project">{ name }</h3>
        <p className="p-2 text-gray-project opacity-70">{ description }</p>
        <div className="p-2 flex items-center">
          <div className="h-4 w-4 bg-purple-project rounded-full"></div>
          <span className="px-2 text-gray-project">{ language }</span>
        </div>
      </div>
    </a>
  );
};

export default RepositoreCard;
