import React from 'react'
import search from '../../images/search.svg';
import account from '../../images/account.svg';
import notifications from '../../images/notifications.svg';

const Menu = () => {
  return (
    <div className="w-full flex flex-col p-8">
      <div className="flex justify-between">
        <div className="flex items-center border border-gray-400 rounded-full">
          <button type="button" className="mx-1 hover:bg-gray-200 rounded-full">
            <img
              src={ search }
              alt="Search icon"
              className="p-1 h-8 w-8"
            />
          </button>
          <input
            type="text"
            autoCapitalize="none"
            autoComplete="off"
            autoCorrect="off"
            placeholder="Search or Jump"
            className="outline-none px-2 rounded-full text-lg"
          />
        </div>
        <div className="flex">
          <button type="button" className="p-1 mx-8 hover:underline">Pull Request</button>
          <button type="button" className="p-1 mx-8 hover:underline">Issues</button>
          <button type="button" className="p-1 mx-8 hover:underline">MarketPlace</button>
          <button type="button" className="p-1 mx-8 hover:underline">Explore</button>
        </div>
        <div className="flex items-center">
          <button type="button" className="mx-2 rounded-full hover:bg-gray-200">
            <img
              src={ notifications }
              alt="Notifications icon"
              className="p-1 h-10 w-10"
            />
          </button>
          <button type="button" className="mx-2 rounded-full hover:bg-gray-200">
            <img
              src={ account }
              alt="Account icon"
              className="p-1 h-10 w-10"
            />
          </button>

        </div>
      </div>
      <div className="flex justify-center py-20">
        <button type="button" className="p-1 mx-8 hover:underline">Overview</button>
        <button type="button" className="p-1 mx-8 hover:underline">Repositories</button>
        <button type="button" className="p-1 mx-8 hover:underline">Packages</button>
        <button type="button" className="p-1 mx-8 hover:underline">Projects</button>
      </div>
    </div>
  )
}

export default Menu
