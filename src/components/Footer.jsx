import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return(<>

<div className="bg-accent w-full p-10 grid grid-cols-4">
    

<div className="md:col-span-2 col-span-4 pl-10 text-xl text-white">
    <FontAwesomeIcon icon={faGithub}/> <a className="pl-5" target="_BLANK" href="https://github.com/RashmikaDil" rel="noopener">github.com/RashmikaDil</a>
    


</div>
 <div className="md:col-span-2 col-span-4 pl-10 text-xl text-white">
 <FontAwesomeIcon icon={faLinkedin}/><a className="pl-5" target="_BLANK" href="linkedin.com/in/rashmika-dilhara-47a7102aa/" rel="noopener">linkedin.com/in/rashmika-dilhara-47a7102aa/</a>
   

</div>



</div>

    </>)
}

export default Footer;