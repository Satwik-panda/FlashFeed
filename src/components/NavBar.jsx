import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { ThemeContext } from '../context/ThemeContext';
import Theme from '../components/Theme';

function NavBar() {
  const [search, setSearchValue] = useState("");
  const navigate=useNavigate();
  const theme=useContext(ThemeContext)
  const mode = theme.state.darkMode;


  function handleSearch(e) {
    e.preventDefault();
    navigate('/search',{state:search})
    setSearchValue('')
  }

  return (<div className={`pt-8 w-full ${mode ? 'bg-[#2a2c2f] text-[#d7bb24]' : 'bg-[#d3e1c4] text-[#5c2f2d]'}`}>
    <div className="flex items-center px-10 py-[5rem]">
      <NavLink 
        to="/" 
        className={`pb-8 absolute right-0 left-0 font-semibold text-4xl md:text-6xl mx-10 flex items-center justify-center `}
      >
        FlashFeed
      </NavLink> 
      <div className="absolute right-5 top-3 ">

      <Theme/>
      </div>
    </div>

    <nav className={`flex justify-around items-center pb-8 container mx-auto flex-col xsm:flex-row gap-5 lg:gap-3 `}>
      <div className="flex font-medium items-center justify-center w-full xsm:w-1/3">
        <NavLink to="/" className="mr-[3rem]">
          Home
        </NavLink>
        <ul className="relative">
          <li className="group">
            <p className="cursor-pointer">Categorie</p>
            <ul className={`absolute w-28 left-0 hidden z-10 shadow-lg group-hover:block ${mode ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}>
              <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => navigate('/Categorie', { state: { categorie: "business" } })}>Business</li>
              <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => navigate('/Categorie', { state: { categorie: "general" } })}>General</li>
              <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => navigate('/Categorie', { state: { categorie: "health" } })}>Health</li>
              <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => navigate('/Categorie', { state: { categorie: "science" } })}>Science</li>
              <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => navigate('/Categorie', { state: { categorie: "sports" } })}>Sports</li>
            </ul>
          </li>
        </ul>
      </div>
      <form onSubmit={handleSearch} className="flex items-center w-full xsm:w-2/3">
        <input
          className={`p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg ${mode ? 'bg-gray-900 text-white hover:shadow-gray-400' : 'bg-beige text-black'} hover:shadow-blue-100 focus:shadow-blue-300 focus:scale-105 hover:scale-105 duration-300 flex-grow`}
          type="text"
          placeholder="Search News"
          value={search}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button
          className="mx-8 text-[2rem] flex items-center justify-center"
          type="submit"
        >
          <CiSearch />
        </button>
      </form>
    </nav>
  </div>);
}

export default NavBar;
