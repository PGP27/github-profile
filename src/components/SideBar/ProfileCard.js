import React from 'react';

const ProfileCard = ({ image, name, nick, followers, following }) => {
  return (
    <div className="flex flex-col p-4 justify-center items-center text-center">
      <h1 className="p-2">GitHub</h1>
      <img
        src={ image }
        alt={ `${ name } - ${ nick }` }
        className="h-20 w-20 rounded-full"
      />
      <h2 className="p-2">{ name }</h2>
      <h3 className="p-2 text-gray-500">{ nick }</h3>
      <div className="flex">
        <div className="flex flex-col">
          <span className="p-2">{ followers }</span>
          <span className="p-2">followers</span>
        </div>
        <div className="flex flex-col">
          <span className="p-2">{ following }</span>
          <span className="p-2">following</span>
        </div>
      </div>
      <button
        type="button"
        className="w-full p-2 bg-purple-400 text-white rounded-lg"
      >
        Following
      </button>
    </div>
  );
};

export default ProfileCard;
