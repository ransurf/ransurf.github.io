import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

function Navbar() {
  //check if path is programming or not

  return (
    <header className="bg-night-100 header">
      <div className="container mx-auto flex justify-between">
        <nav>
          <NavLink
            to="/"
            exact
            className="inflex-flex items-center py-6 px-3 mr-4 text-white hover:text-purple-300 font-bold text-code tracking-widest"
          >
            John Mavrick
          </NavLink>
          <NavLink
            exact
            to={"/about"}
            className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-purple-300 text-code-thin"
          >
            About
          </NavLink>
          <NavLink
            to="/programming"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-purple-300 text-code-thin"
            activeClassName="text-purple-400 bg-purple-700"
          >
            Programming
          </NavLink>
          <NavLink
            to="/post"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-purple-300 text-code-thin"
            activeClassName="text-purple-400 bg-purple-700"
          >
            Blog
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://www.linkedin.com/in/john-mavrick-reyes/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          ></SocialIcon>
          <SocialIcon
            url="https://www.youtube.com/channel/UC_nJ4PiyzE26LX-FmrnvCfQ"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          ></SocialIcon>
          <SocialIcon
            url="https://github.com/ransurf"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            bgColor="#a6a6a6"
            style={{ height: 35, width: 35 }}
          ></SocialIcon>
          <SocialIcon
            url="https://linktr.ee/johnmavrick"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          ></SocialIcon>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
