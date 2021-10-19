import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Page = () => {

  const { pageName } = useParams();
  const [page, setPage] = useState();

  useEffect(() => {
    const getPage = async () => {
      const endpoint = `https://api.github.com/users/${ pageName }`;
      const response = await fetch(endpoint);
      const obj = await response.json();
      setPage(obj);
    }
    getPage();
  }, [pageName]);

  console.log(page);

  if (page) {
    const { message } = page;
    return (
      <div>
        { message }
      </div>
    );
  }

  return (
    <div>
      oi
    </div>
  );

};

export default Page;
