import ProgressBar from "./Progressbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBootstrap, faCss, faCss3, faFigma, faHtml5, faJenkins, faJs, faJsfiddle, faJsSquare, faMicrosoft, faNode, faReact, faSass, faVuejs } from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faExchange, faSubscript, faTeletype } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

const Skills = () => {





  return (
    <div className='w-full bg-secondary p-10  sm:pt-32 bg-cover  bg-no-repeat' >
      <h1 className='text-4xl font-bold text-text font2 text-center'>My Skills</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 mt-10'>
        <div className='col-span-2 flex flex-wrap items-center  justify-center '>





<div className="flex m-10 w-20 h-10 justify-center items-center flex-col text-text cursor-pointer transition-all hover:text-special">
    <FontAwesomeIcon className="text-4xl " icon={faHtml5}/> 
    <h1 className="text-md font-bold text-center mb-2">Html</h1>
</div>

<div className="flex m-10 w-20 h-10 justify-center items-center flex-col text-text cursor-pointer transition-all hover:text-pink-500">
    <FontAwesomeIcon className="text-4xl"  icon={faCss}/>
    <h1 className="text-md font-bold text-center mb-2">Css</h1>
</div>
<div className="flex m-10 w-20 h-10 justify-center items-center flex-col
 text-text cursor-pointer transition-all hover:text-orange-300">
    <FontAwesomeIcon className="text-4xl "  icon={faJs}/>
    <h1 className="text-md font-bold text-center mb-2">JavaScript</h1>
</div>
<div className="flex m-10 w-20 h-10 justify-center items-center flex-col
 text-text cursor-pointer transition-all hover:text-blue-500">
    <FontAwesomeIcon className="text-4xl "  icon={faReact}/>
    <h1 className="text-md font-bold text-center mb-2">React</h1>
</div>


<div className="flex m-10 w-20 h-10 justify-center items-center flex-col
 text-text cursor-pointer transition-all hover:text-pink-500">
     <FontAwesomeIcon className="text-4xl "  icon={faSass}/>
    <h1 className="text-md font-bold text-center  mb-2">Sass</h1>
</div>


<div className="flex m-10 w-20 h-10 justify-center items-center flex-col
 text-text cursor-pointer transition-all hover:text-blue-200">
    <FontAwesomeIcon className="text-4xl"  icon={faCss}/>
    <h1 className="text-md font-bold text-center  mb-2">Tailwind</h1>
</div>
<div className="flex m-10 w-20 h-10 justify-center items-center flex-col
 text-text cursor-pointer transition-all hover:text-purple-500">
    <FontAwesomeIcon className="text-4xl"  icon={faBootstrap}/>
    <h1 className="text-md font-bold text-center  mb-2">Bootstrap</h1>
</div>

<div className="flex m-10 w-20 h-10 justify-center items-center flex-col
 text-text cursor-pointer transition-all hover:text-green-500">
    <FontAwesomeIcon className="text-4xl"  icon={faNode}/>
    <h1 className="text-md font-bold text-center  mb-2">Node Js</h1>
</div>
<div className="flex m-10 w-20 h-10 justify-center items-center flex-col
 text-text cursor-pointer transition-all hover:text-red-500">
    <FontAwesomeIcon className="text-4xl"  icon={faJsfiddle}/>
    <h1 className="text-md font-bold text-center  mb-2">Express Js</h1>
</div>

<div className="flex m-10 w-20 h-10 justify-center items-center flex-col
 text-text cursor-pointer transition-all hover:text-green-300">
    <FontAwesomeIcon className="text-4xl"  icon={faDatabase}/>
    <h1 className="text-md font-bold text-center  mb-2">MongoDB</h1>
</div>
<div className="flex m-10 w-20 h-10 justify-center items-center flex-col
 text-text cursor-pointer transition-all hover:text-blue-300">
    <FontAwesomeIcon className="text-4xl"  icon={faJsSquare}/>
    <h1 className="text-md font-bold text-center  mb-2">TypeScript</h1>
</div>
<div className="flex m-10 w-20 h-10 justify-center items-center flex-col
 text-text cursor-pointer transition-all hover:text-black">
    <FontAwesomeIcon className="text-4xl"  icon={faJsSquare}/>
    <h1 className="text-md font-bold text-center  mb-2">Next Js</h1>
</div>
<div className="flex m-10 w-20 h-10 justify-center items-center flex-col
 text-text cursor-pointer transition-all hover:text-purple-300">
    <FontAwesomeIcon className="text-4xl"  icon={faFigma}/>
    <h1 className="text-md font-bold text-center  mb-2">Figma</h1>
</div>
          
          
         
         
       
        
         
        </div>
      </div>
      
    </div>
  );
}

export default Skills;