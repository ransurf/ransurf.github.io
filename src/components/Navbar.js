import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

function Navbar() {
  //check if path is programming or not

  return (
    <header className="bg-night-100 header">
      <div className=" overflow-auto container mx-auto flex justify-between">
        <nav className="my-0 relative mx-auto flex gap-3 sm:gap-10">
          <NavLink
            to="/"
            exact
            className="inline-flex items-center py-6 px-3 mr-4 text-white hover:text-purple-300 font-bold text-code tracking-widest"

          >
            John Mavrick
          </NavLink>
          <NavLink
            exact
            to={"/about"}
            className="inline-flex items-center  my-3 rounded text-white hover:text-purple-300 text-code-thin grow-10"
            style={({ isActive }) => ({ color: isActive ? 'cyan' : 'white' })}
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className="inline-flex items-center  my-0 rounded text-white hover:text-purple-300 text-code-thin grow-10"
            style={({ isActive }) => ({ color: isActive ? 'cyan' : 'white' })}
          >
            Projects
          </NavLink>
          <NavLink
            to="/post"
            className="inline-flex items-center  my-0 rounded text-white hover:text-purple-300 text-code-thin grow-10"
            style={({ isActive }) => ({ color: isActive ? 'cyan' : 'white' })}
          >
            Blog
          </NavLink>
          <a
            href="https://ransurf.github.io/quartz/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center  my-0 rounded text-white hover:text-purple-300 text-code-thin grow-10"
          >
            Notes
          </a>
          <a
            href="https://ko-fi.com/johnmavrick/shop"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center  my-0 rounded text-white hover:text-purple-300 text-code-thin grow-10"
          >
            Services
          </a>
        </nav>
        <div className="inline-flex my-0 items-center ">
          <SocialIcon
            url="https://www.linkedin.com/in/john-mavrick-reyes/"
            className="mr-4 grow-10"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          ></SocialIcon>
          <SocialIcon
            url="https://www.youtube.com/channel/UC_nJ4PiyzE26LX-FmrnvCfQ"
            className="mr-4 grow-10"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          ></SocialIcon>
          <SocialIcon
            url="https://github.com/ransurf"
            className="mr-4 grow-10"
            target="_blank"
            fgColor="#fff"
            bgColor="#a6a6a6"
            style={{ height: 35, width: 35 }}
          ></SocialIcon>
          <SocialIcon
            url="https://linktr.ee/johnmavrick"
            className="mr-4 grow-10"
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
