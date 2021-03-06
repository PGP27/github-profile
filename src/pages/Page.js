import React, { useEffect, useState } from 'react';
import GitHubCalendar from 'react-github-calendar';
import { useParams } from 'react-router';
import fetchApi from '../service/api';
import Loading from '../components/Loading/Loading';
import SideBar from '../components/SideBar/SideBar';
import Menu from '../components/MainContent/Menu';
import PopularRepositores from '../components/MainContent/PopularRepositores';

const Page = () => {
  const { pageName } = useParams();
  const [pageDetails, setPageDetails] = useState();
  const [pageRepos, setPageRepos] = useState();
  const [stars, setStars] = useState();

  useEffect(() => {
    const getPageDetails = async () => {
      const obj = await fetchApi(pageName);
      setPageDetails(obj);
    };
    const getPageRepos = async () => {
      const obj = await fetchApi(`${pageName}/repos`);
      const arrayRepos = obj.slice(0, 6);
      setPageRepos(arrayRepos);
      const arrayStars = [];
      obj.forEach(({ stargazers_count: stargazersCount }) => {
        arrayStars.push(stargazersCount);
      });
      const starsCount = arrayStars.reduce((a, b) => a + b);
      setStars(starsCount);
    };
    getPageDetails();
    getPageRepos();
  }, [pageName]);

  if (pageDetails && pageRepos) {
    const {
      avatar_url: avatarUrl, name, login, followers, following, bio, company, location, email,
    } = pageDetails;
    const followersNumber = followers < 10 ? `0${followers}` : followers;
    const followingNumber = following < 10 ? `0${following}` : following;
    const starsNumber = stars < 10 ? `0${stars}` : stars;
    return (
      <div className="w-full flex">
        <SideBar
          image={avatarUrl}
          name={name}
          nick={login}
          followers={followersNumber}
          following={followingNumber}
          stars={starsNumber}
          bio={bio}
          company={company}
          location={location}
          email={email}
        />
        <div className="main-content w-full flex flex-col shadow-2xl">
          <Menu />
          <div className="flex flex-col px-8">
            <h2 className="text-2xl text-gray-project opacity-50">Popular Repositores</h2>
            <PopularRepositores
              repositores={pageRepos}
            />
          </div>
          <div className="flex flex-col px-8">
            <h2 className="text-2xl text-gray-project opacity-50">Contribution</h2>
            <div className="flex justify-center items-center mt-8 py-4 px-8 rounded-lg border border-white-project">
              <GitHubCalendar
                username={pageName}
                color="#7B61FF"
                fontSize={18}
                blockMargin={6}
                blockSize={16}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex justify-center items-center">
      <Loading />
    </div>
  );
};

export default Page;
