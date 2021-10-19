import React from 'react';

const ProfileCard = ({ image, name, nick, followers, following }) => {
  return (
    <div className="flex flex-col p-4 justify-center items-center text-center">
      <h1 className="pt-6 pb-12 text-2xl text-purple-project">GitHub</h1>
      <div className="flex justify-center">
        <div className="ellipse1"></div>
        <div className="ellipse2"></div>
        <div className="ellipse3"></div>
        <img
          src={ image }
          alt={ `${ name } - ${ nick }` }
          className="h-28 w-28 rounded-full"
        />
      </div>
      <h2 className="p-1 mt-12 ">{ name }</h2>
      <h3 className="p-1 opacity-30">{ nick }</h3>
      <div className="flex mt-2">
        <div className="flex flex-col">
          <span className="p-2 text-2xl">{ followers }</span>
          <span className="p-2 opacity-50">followers</span>
        </div>
        <div className="flex flex-col">
          <span className="p-2 text-2xl">{ following }</span>
          <span className="p-2 opacity-50">following</span>
        </div>
      </div>
      <button
        type="button"
        className="w-full py-1 mt-4 bg-purple-project text-white rounded-lg hover:opacity-80"
      >
        Following
      </button>
    </div>
  );
};

export default ProfileCard;
