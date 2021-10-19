import React from 'react';
import PropTypes from 'prop-types';
import companyIcon from '../../images/company.svg';
import locationIcon from '../../images/location.svg';
import emailIcon from '../../images/email.svg';

const InfoCard = ({
  bio, company, location, email,
}) => (
  <div className="flex flex-col p-4">
    <p className="my-4 p-2 opacity-50">{ bio }</p>
    <div className="flex flex-col my-4">
      <div className="flex">
        <img
          src={companyIcon}
          alt="Company icon"
          className="p-1 h-8 w-8 opacity-50"
        />
        <span className="p-1 opacity-50">{ company }</span>
      </div>
      <div className="flex">
        <img
          src={locationIcon}
          alt="Location icon"
          className="p-1 h-8 w-8 opacity-50"
        />
        <span className="p-1 opacity-50">{ location }</span>
      </div>
      <div className="flex">
        <img
          src={emailIcon}
          alt="Email icon"
          className="p-1 h-8 w-8 opacity-50"
        />
        <span className="p-1 opacity-50">{ email }</span>
      </div>
    </div>
    <div>
      <button type="button" className="p-1 mt-12 opacity-50 hover:underline">Block or report</button>
    </div>
  </div>
);

InfoCard.propTypes = {
  bio: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default InfoCard;
