
import { faFacebook, faGithub, faInstagram, faLinkedin, faThreads, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMailBulk } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const SocialMedia = () => {
  return (<>
    <div className="flex text-white  text-4xl  gap-8 mt-4">

<a href="https://www.instagram.com/rashmikadil523/" target='blank'>
  <FontAwesomeIcon className='text-amber-50 cursor-pointer hover:text-special transition-all' icon={faInstagram}></FontAwesomeIcon>
</a>
<a href="https://x.com/RashmikaDil2023" target='blank'>
  <FontAwesomeIcon className='text-amber-50 cursor-pointer hover:text-special transition-all' icon={faXTwitter}></FontAwesomeIcon>
</a>
<a href="https://www.linkedin.com/in/rashmika-dilhara-47a7102aa/" target='blank'>
  <FontAwesomeIcon className='text-amber-50 cursor-pointer hover:text-special transition-all' icon={faLinkedin}></FontAwesomeIcon>
</a>
<a href="https://web.facebook.com/RashmikaDilharaFB" target='blank'>
  <FontAwesomeIcon className='text-amber-50 cursor-pointer hover:text-special transition-all' icon={faThreads}></FontAwesomeIcon>
</a>
<a href="https://www.threads.com/@rashmikadil523" target='blank'>
  <FontAwesomeIcon className='text-amber-50 cursor-pointer hover:text-special transition-all' icon={faFacebook}></FontAwesomeIcon>
</a>

<a href="https://github.com/RashmikaDil" target='blank'>
  <FontAwesomeIcon className='text-amber-50 cursor-pointer hover:text-special transition-all' icon={faGithub}></FontAwesomeIcon>
</a>




        
      </div>


      
     </>

  );

};

export default SocialMedia;