import React from 'react';
import PropTypes from 'prop-types';
import InfoCard from './InfoCard';
import ProfileCard from './ProfileCard';

const SideBar = ({
  image, name, nick, followers, following, stars, bio, company, location, email,
}) => (
  <div className="w-80 h-full flex flex-col text-gray-project">
    <ProfileCard
      image={image}
      name={name}
      nick={nick}
      followers={followers}
      following={following}
      stars={stars}
    />
    <InfoCard
      bio={bio}
      company={company}
      location={location}
      email={email}
    />
  </div>
);

SideBar.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  nick: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  following: PropTypes.number.isRequired,
  stars: PropTypes.number.isRequired,
  bio: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default SideBar;
