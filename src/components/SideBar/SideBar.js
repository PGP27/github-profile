import React from 'react';
import InfoCard from './InfoCard';
import ProfileCard from './ProfileCard';
import '../../styles/SideBar.css';

const SideBar = ({ image, name, nick, followers, following, bio, company, location, email }) => {
  return (
    <div className="w-80 h-full flex flex-col text-gray-project">
      <ProfileCard
        image={ image }
        name={ name }
        nick={ nick }
        followers={ followers }
        following={ following }
      />
      <InfoCard
        bio={ bio }
        company={ company }
        location={ location }
        email={ email }
      />
    </div>
  );
};

export default SideBar;
