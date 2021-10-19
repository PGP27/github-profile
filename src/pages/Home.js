import React, { useEffect, useState } from 'react';
import Menu from '../components/MainContent/Menu';
import SideBar from '../components/SideBar/SideBar';

const Page = () => {

  const [pageDetails, setPageDetails] = useState();

  useEffect(() => {
    const getPageDetails = async () => {
      const endpoint = 'https://api.github.com/users/camunda';
      const response = await fetch(endpoint);
      const obj = await response.json();
      setPageDetails(obj);
    }
    getPageDetails();
  }, []);

  console.log(pageDetails);

  if (pageDetails) {
    const { avatar_url, name, login, followers, following, bio, company, location, email } = pageDetails;
    return (
      <div className="flex">
        <SideBar
          image={ avatar_url }
          name={ name }
          nick={ login }
          followers={ followers }
          following={ following }
          bio={ bio }
          company={ company }
          location={ location }
          email={ email }
        />
        <Menu />
      </div>
    );
  }

  return (
    <div>Carregando...</div>
  );
};

export default Page;
