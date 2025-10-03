import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCss, faCss3, faHtml5, faJs, faJsSquare, faMicrosoft, faNode, faReact, faSass } from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faExchange } from "@fortawesome/free-solid-svg-icons";


const ProgressBar = ({ name, progress, icon }) => {
  return (
    <div className="w-full p-2 flex flex-col items-center">
      {/* Icon */}
      <FontAwesomeIcon icon={icon} className="text-2xl mb-2 text-text" />

      {/* Label */}
      <h1 className="text-md font-bold text-text mb-2">{name}</h1>

<icon></icon>
     

    </div>
  );
};

export default ProgressBar;
