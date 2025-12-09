import "../App.css";
import p1 from "../img/p1.PNG";
import snapLinkz from "../img/snapLinkz.png";
import p3 from "../img/c3.PNG";
import p4 from "../img/p4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss,
  faJsfiddle,
  faMicrosoft,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
const Projects = () => {
  return (
    <>
      <div className="flex flex-col items-center pb-10 h-auto bg-gg ">
        <h1 className="text-4xl font-bold mb-8 font2 text-text pt-10">
          My Projects
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 w-full px-10">
          <div className="bg-accent p-0 pb-5 rounded-sm shadow-lg hover:shadow-xl scale-100 hover:scale-105 cursor-pointer  transition-all duration-300">
            <img
              src={p1}
              alt="Project 1"
              className="w-full h-48 object-cover rounded-sm mb-4"
            />
            <div className="flex justify-between mb-4">
              <h2 className="text-xl font-bold text-text mb-2 pl-5">
                Adventure Lanka
              </h2>
              <div className="p-2 text-sm bg-special h-10 flex justify-center text-center items-center w-30">
                MERN STACK
              </div>
            </div>
            <div className="flex pl-5 text-center items-center  pr-5 gap-5 pt-3 mb-4 text-white">
              <FontAwesomeIcon icon={faReact}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faDatabase}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faNodeJs}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faJsfiddle}></FontAwesomeIcon>
            </div>

            <p className="text-gray-400 text-sm pl-5 pr-5">
              Discover Lanka is a web-based platform designed to help travelers
              explore Sri Lanka by providing detailed information, ratings, and
              user reviews of popular and hidden tourist destinations across the
              island. The website aims to be a one-stop travel guide, helping
              both local and international tourists make informed decisions
              about where to go, what to see, and what to expect.
            </p>

            <a
              href="https://adventurelanaka.netlify.app/"
              target="_BLANK"
              rel=""
              className=" mb-10 mt-4 px-4 py-2 text-special cursor-pointer hover:text-special/95"
            >
              View Project
            </a>
          </div>
          <div className="bg-accent p-0 pb-5 rounded-sm shadow-lg hover:shadow-xl scale-100 hover:scale-105 cursor-pointer  transition-all duration-300">
            <img
              src={snapLinkz}
              alt="Project 1"
              className="w-full h-48 object-cover rounded-sm mb-4"
            />
            <div className="flex justify-between mb-4">
              <h2 className="text-xl font-bold text-text mb-2 pl-5">
                SnapLinkz
              </h2>
              <div className="p-2 text-sm bg-special h-10 flex justify-center text-center items-center w-30">
                MERN STACK
              </div>
            </div>
            <div className="flex pl-5 text-center items-center  pr-5 gap-5 pt-3 mb-4 text-white">
              <FontAwesomeIcon icon={faReact}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faDatabase}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faNodeJs}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faJsfiddle}></FontAwesomeIcon>
            </div>
            <p className="text-gray-400 text-sm pl-5 pr-5">
              SnapLinkz is a modern and lightweight URL shortener web
              application built with the MERN stack (MongoDB, Express, React,
              Node.js). It allows users to easily shorten long URLs and track
              engagement metrics in real-time
            </p>

            <a
              href="https://snaplinkz.netlify.app/"
              target="_BLANK"
              rel=""
              className=" mb-10 mt-4 px-4 py-2 text-special cursor-pointer hover:text-special/95"
            >
              View Project
            </a>
          </div>
          <div className="bg-accent p-0 pb-5 rounded-sm shadow-lg hover:shadow-xl scale-100 hover:scale-105 cursor-pointer  transition-all duration-300">
            <img
              src={p3}
              alt="Project 1"
              className="w-full h-48 object-cover   rounded-sm mb-4"
            />

            <div className="flex justify-between mb-4">
              <h2 className="text-xl font-bold text-text mb-2 pl-5">
                StockFlow POS
              </h2>
              <div className="p-2 text-sm bg-special h-10 flex justify-center text-center items-center w-30">
                MERN STACK
              </div>
            </div>
            <div className="flex pl-5 text-center items-center  pr-5 gap-5 pt-3 mb-4 text-white">
              <FontAwesomeIcon icon={faReact}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faDatabase}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faNodeJs}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faJsfiddle}></FontAwesomeIcon>
            </div>
            <p className="text-gray-400 text-sm pl-5 pr-5">
              StockFlow POS is a modern, all-in-one Point-of-Sale solution
              designed to simplify sales, inventory, and customer management for
              any retail business. Built with speed, accuracy, and ease of use
              in mind, StockFlow helps you manage your entire store from one
              clean dashboard.
            </p>
          </div>

          <div className="bg-accent p-0 pb-5 rounded-sm shadow-lg hover:shadow-xl scale-100 hover:scale-105 cursor-pointer  transition-all duration-300">
            <img
              src={p4}
              alt="Project 1"
              className="w-full h-48 object-cover   rounded-sm mb-4"
            />

            <div className="flex justify-between mb-4">
              <h2 className="text-xl font-bold text-text mb-2 pl-5">
                SUBASSEMBLY KANBAN (MAS Thurulie)
              </h2>
              <div className="p-2 text-sm bg-special h-10 flex justify-center text-center items-center w-30">
                POWERAPPS
              </div>
            </div>
            <div className="flex pl-5 text-center items-center  pr-5 gap-5 pt-3 mb-4 text-white">
              <FontAwesomeIcon icon={faMicrosoft}></FontAwesomeIcon>
            </div>
            <p className="text-gray-400 text-sm pl-5 pr-5">
              I developed a custom Kanban management application using Microsoft
              Power Apps to streamline workflow and material movement within the
              Subassembly Department at MAS Thurulie. The app digitized the
              traditional Kanban process, improved task visibility, and reduced
              communication delays between production teams.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
