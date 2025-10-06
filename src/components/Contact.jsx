import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SocialMedia from './SocialMedia'

const Contact = ()=>{
        return(<>
        
         <div className="flex flex-col  items-center pb-10  h-auto bg-accent p-10 ">
            
        <h1 className="text-4xl font-bold mb-8 font2 text-text pt-10">Contact Me</h1>
                <div className="w-full flex flex-col items-center pb-10 justify-center gap-2  h-auto ">

                    <div>
                        <h2 className="text-xl text-white flex items-center font-bold">
                            <FontAwesomeIcon className="mr-2" icon={faEnvelope}/> Email : 
                            <p className="ml-5 text-white/70 font-normal"> Rashmikadil2023@gmail.com</p> </h2>
                    </div> 
                     <div>
                        <h2 className="text-xl text-white items-center flex font-bold">
                            <FontAwesomeIcon className="mr-2" icon={faPhone}/>Phone No : 
                            <p className="ml-5 text-white/70 font-normal"> +94767000149</p> </h2>
                    </div>    
                    
                          <div className="mt-4 flex flex-col justify-center">
                            
                            <h2 className="mb-2 text-xl text-white items-center flex flex-col justify-center font-bold">Follow Me</h2>
                            <div className="w-32 h-[1px] bg-special "></div>
                            </div>        
                        <div>
                            <SocialMedia/>
                        </div>

                </div>
   
        </div>
        
        
        
        
        </>)
}

export default Contact;