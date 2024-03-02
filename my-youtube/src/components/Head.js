import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/AppSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    const Timer = setTimeout(() => getSearchSuggestions(), 200);

    return () => {
      clearTimeout(Timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
          alt="hamburger"
        />

        <img
          className="h-8 mx-2"
          src="https://vectorseek.com/wp-content/uploads/2021/01/YouTube-Logo-Vector.png"
          alt="youtube logo"
        />
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-200">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div className="fixed bg-white py-2 px-5 w-1/3 rounded-lg shadow-lg">
          <ul>
            <li className="py-2 shadow-sm">
              <i className="fa-solid fa-magnifying-glass"></i> iPhone
            </li>
            <li className="py-2 shadow-sm">
              <i className="fa-solid fa-magnifying-glass"></i> iPhone 11
            </li>
            <li className="py-2 shadow-sm">
              <i className="fa-solid fa-magnifying-glass"></i> iPhone 12
            </li>
            <li className="py-2 shadow-sm">
              <i className="fa-solid fa-magnifying-glass"></i> iPhone 12 pro
            </li>
            <li className="py-2 shadow-sm">
              <i className="fa-solid fa-magnifying-glass"></i> iPhone 13
            </li>
            <li className="py-2 shadow-sm">
              <i className="fa-solid fa-magnifying-glass"></i> iPhone 13 pro max
            </li>
          </ul>
        </div>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user-icon"
        />
      </div>
    </div>
  );
};

export default Head;
