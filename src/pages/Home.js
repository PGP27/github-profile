import React, { useEffect, useState } from 'react';
import Menu from '../components/MainContent/Menu';
import PopularRepositores from '../components/MainContent/PopularRepositores';
import SideBar from '../components/SideBar/SideBar';

const Page = () => {

  const [pageDetails, setPageDetails] = useState();
  const [pageRepos, setPageRepos] = useState();

  useEffect(() => {
    const getPageDetails = async () => {
      const endpoint = 'https://api.github.com/users/camunda';
      const response = await fetch(endpoint);
      const obj = await response.json();
      setPageDetails(obj);
    }
    const getPageRepos = async () => {
      const endpoint = 'https://api.github.com/users/camunda/repos';
      const response = await fetch(endpoint);
      const obj = await response.json();
      const arrayRepos = obj.slice(0, 6);
      setPageRepos(arrayRepos);
    }
    getPageDetails();
    getPageRepos();
  }, []);

  console.log(pageDetails);
  console.log(pageRepos);

  if (pageDetails && pageRepos) {
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
        <div className="w-full h-screen flex flex-col shadow-2xl">
          <Menu />
          <PopularRepositores
            repositores={ pageRepos }
          />
        </div>
      </div>
    );
  }

  return (
    <div>Carregando...</div>
  );
};

export default Page;
