import c1 from '../img/c1.jpg'
import c2 from '../img/c2.jpg'
const Certifications = ()=>{
        return(<>
         <div className="flex flex-col  items-center pb-10 h-auto bg-gg p-10 ">
        <h1 className="text-4xl font-bold mb-8 font2 text-text pt-10">Achievement</h1>



<div className="flex flex-wrap justify-center  gap-2">


   <div className="flex m-5 cursor-pointer">
     <div className="relative bg-special w-1 h-full mr-5"></div>
            <div className="w-[320px] h-auto ">
              <div className="h-35">

              <p className="font-medium text-white ">Winner Of Online Website competition
                        <p className="font-thin mb-5 text-white/50">Proud to have won the Website Competition 2.0 organized by the PSR Vlog YouTube Channel by introducing an innovative website that rates and reviews tourist destinations in Sri Lanka.
                            </p>  </p>

                             </div>
               <iframe className="relative bottom-0" width="320" height="230" src="https://www.youtube.com/embed/9GFIqNkpAuc?si=f-8q5tw5awtIF_ny" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        

             
                 
            </div>
   </div>



    <div className="flex m-5 cursor-pointer">
     <div className="relative bg-special w-1 h-full mr-5"></div>
            <div className="w-[320px] h-auto">
                    <div className="h-35">
                 <p className="font-medium text-white ">Distinction Pass In Diploma in IT
                        <p className="font-thin mb-5 text-white/50">
                            I have demonstrated my knowledge and skills by earning an IT Diploma with Distinction Pass.  </p>  </p>
          </div>

          <div className='overflow-hidden w-[320px] h-[230px]'>
                  <img    className="hover:scale-[1.1] transition-all bottom-0 overflow-hidden object-top object-cover w-[320px] h-[230px]"  src={c1} />
        
          </div>
            </div>
    </div>
   <div className="flex m-5 cursor-pointer">
     <div className="relative bg-special w-1 h-full mr-5"></div>
            <div className="w-[320px] h-auto">
                    <div className="h-35">
                 <p className="font-medium text-white ">Distinction Pass In Diploma in IT
                        <p className="font-thin mb-5 text-white/50">
                      Successfully completed the CISCO CCNA Level course, gaining a strong foundation in network fundamentals       </p>  </p>
          </div>
          <div className='overflow-hidden w-[320px] h-[230px]'>
                  <img    className="hover:scale-[1.1] transition-all bottom-0 overflow-hidden object-cover w-[320px] h-[230px]"  src={c2} />
        
          </div>
             
            </div>
    </div>

   

            
</div>
             
        </div>
        
        
        
        
        </>)
}

export default Certifications;