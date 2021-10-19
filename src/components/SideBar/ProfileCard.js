import React from 'react';
import PropTypes from 'prop-types';

const ProfileCard = ({
  image, name, nick, followers, following, stars,
}) => (
  <div className="flex flex-col p-4 justify-center items-center text-center">
    <h1 className="pt-6 pb-12 text-2xl text-purple-project">GitHub</h1>
    <div className="flex justify-center">
      <div className="ellipse1" />
      <div className="ellipse2" />
      <div className="ellipse3" />
      <img
        src={image}
        alt={`${name} - ${nick}`}
        className="h-28 w-28 rounded-full"
      />
    </div>
    <h2 className="p-1 mt-12 ">{name}</h2>
    <h3 className="p-1 opacity-30">{nick}</h3>
    <div className="flex mt-2">
      <div className="flex flex-col justify-between">
        <span className="p-2 text-2xl">{followers}</span>
        <span className="p-2 opacity-50">Followers</span>
      </div>
      <div className="flex flex-col justify-between">
        <span className="p-2 text-2xl">{following}</span>
        <span className="p-2 opacity-50">Following</span>
      </div>
      <div className="flex flex-col justify-between">
        <span className="p-2 text-2xl">{stars}</span>
        <span className="p-2 opacity-50">Stars</span>
      </div>
    </div>
    <button
      type="button"
      className="w-full py-1 mt-4 transition bg-purple-project text-white rounded-lg hover:opacity-80"
    >
      Following
    </button>
  </div>
);

ProfileCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  nick: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  following: PropTypes.number.isRequired,
  stars: PropTypes.number.isRequired,
};

export default ProfileCard;
