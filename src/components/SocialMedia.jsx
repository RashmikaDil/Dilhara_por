
import { faGithub, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const SocialMedia = () => {
  return (
    <div className="flex text-white  text-5xl  gap-10 mt-4">

<a href="https://www.instagram.com/rashmikadil523/" target='blank'>
  <FontAwesomeIcon className='text-amber-50 cursor-pointer hover:text-special transition-all' icon={faInstagram}></FontAwesomeIcon>
</a>
<a href="https://x.com/RashmikaDil2023" target='blank'>
  <FontAwesomeIcon className='text-amber-50 cursor-pointer hover:text-special transition-all' icon={faXTwitter}></FontAwesomeIcon>
</a>
<a href="https://www.linkedin.com/in/rashmika-dilhara-47a7102aa/" target='blank'>
  <FontAwesomeIcon className='text-amber-50 cursor-pointer hover:text-special transition-all' icon={faLinkedin}></FontAwesomeIcon>
</a>
<a href="https://github.com/RashmikaDil" target='blank'>
  <FontAwesomeIcon className='text-amber-50 cursor-pointer hover:text-special transition-all' icon={faGithub}></FontAwesomeIcon>
</a>




        
      </div>
     

  );

};

export default SocialMedia;