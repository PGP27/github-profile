import React from 'react';
import RepositoreCard from './RepositoreCard';

const PopularRepositores = ({ repositores }) => {
  return (
    <div className="grid grid-cols-3">
      { repositores.map((repo, index) => {
        const { name, description, language, full_name } = repo;
        return (
          <RepositoreCard
            key={ index }
            name={ name }
            description={ description }
            language={ language }
            link={ `https://github.com/${ full_name }` }
          />
        );
      }) }
    </div>
  );
};

export default PopularRepositores;
