import React, { useEffect, useState } from 'react';
import Menu from '../components/MainContent/Menu';
import PopularRepositores from '../components/MainContent/PopularRepositores';
import SideBar from '../components/SideBar/SideBar';
import GitHubCalendar from 'react-github-calendar';

const Page = () => {

  const [pageDetails, setPageDetails] = useState();
  const [pageRepos, setPageRepos] = useState();

  useEffect(() => {
    const getPageDetails = async () => {
      const endpoint = 'https://api.github.com/users/camunda';
      const response = await fetch(endpoint);
      const obj = await response.json();
      setPageDetails(obj);
    };
    const getPageRepos = async () => {
      const endpoint = 'https://api.github.com/users/camunda/repos';
      const response = await fetch(endpoint);
      const obj = await response.json();
      const arrayRepos = obj.slice(0, 6);
      setPageRepos(arrayRepos);
    };
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
          <div className="flex flex-col p-8">
            <h2 className="text-2xl">Contribution</h2>
            <div className="flex justify-center items-center m-8 p-8 rounded-lg border border-white-project">
              <GitHubCalendar
                username="pgp27"
                color="#7B61FF"
                fontSize={ 18 }
                blockMargin={ 6 }
                blockSize={ 16 }
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>Carregando...</div>
  );
};

export default Page;
