import ProgressBar from "./Progressbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss, faCss3, faHtml5, faJs, faJsSquare, faMicrosoft, faNode, faReact, faSass } from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faExchange } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  return (
    <div className='w-full bg-secondary p-10  sm:pt-32 bg-cover  bg-no-repeat' >
      <h1 className='text-4xl font-bold text-text font2 text-center'>My Skills</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 mt-10'>
        <div className='col-span-1 flex flex-col items-center  '>

          <FontAwesomeIcon className="text-4xl text-amber-50" icon={faHtml5}/> 
          <ProgressBar  name="HTML" progress={90} />
          <FontAwesomeIcon className="text-4xl text-amber-50 mt-4"  icon={faCss}/>
          <ProgressBar name="CSS" progress={80} />
          <FontAwesomeIcon className="text-4xl text-amber-50 mt-4"  icon={faJs}/>
          <ProgressBar name="JavaScript" progress={70} />
          <FontAwesomeIcon className="text-4xl text-amber-50 mt-4"  icon={faReact}/>
          <ProgressBar name="React" progress={65} />
          <FontAwesomeIcon className="text-4xl text-amber-50 mt-4"  icon={faSass}/>
          <ProgressBar name="Scss/Sass" progress={75} />
          
        </div>
        <div className='col-span-1 flex flex-col items-center'>
          <FontAwesomeIcon className="text-4xl text-amber-50 mt-4"  icon={faCss}/>
          <ProgressBar name="Tailwind CSS" progress={80} />
          <FontAwesomeIcon className="text-4xl text-amber-50 mt-4"  icon={faNode}/>
          <ProgressBar name="Node Js" progress={50} />
          <FontAwesomeIcon className="text-4xl text-amber-50 mt-4"  icon={faExchange}/>
          <ProgressBar name="Express Js" progress={50} />
          <FontAwesomeIcon className="text-4xl text-amber-50 mt-4"  icon={faDatabase}/>
          <ProgressBar name="MongoDB" progress={75} />
          <FontAwesomeIcon className="text-4xl text-amber-50 mt-4"  icon={faJsSquare}/>
          <ProgressBar name="TypeScript" progress={68} />
        </div>
      </div>
      
    </div>
  );
}

export default Skills;