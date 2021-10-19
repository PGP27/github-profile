import React from 'react';

const InfoCard = ({ bio, company, location, email }) => {
  return (
    <div className="flex flex-col p-4">
      <p className="my-8 p-2">Bio: { bio }</p>
      <div className="flex flex-col my-8">
        <span className="p-1">Company: { company }</span>
        <span className="p-1">Location: { location }</span>
        <span className="p-1">Email: { email }</span>
      </div>
      <div>
        <button type="button" className="p-1 my-16 hover:underline">Block or report</button>
      </div>
    </div>
  );
};

export default InfoCard;
