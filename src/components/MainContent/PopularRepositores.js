import React from 'react';
import PropTypes from 'prop-types';
import RepositoreCard from './RepositoreCard';

const PopularRepositores = ({ repositores }) => (
  <div className="grid grid-cols-3">
    { repositores.map((repo) => {
      const {
        name, description, language, full_name: fullName,
      } = repo;
      return (
        <RepositoreCard
          key={name}
          name={name}
          description={description}
          language={language}
          link={`https://github.com/${fullName}`}
        />
      );
    }) }
  </div>
);

PopularRepositores.propTypes = {
  repositores: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};

export default PopularRepositores;
