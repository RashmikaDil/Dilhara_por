
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import baseImg from './img/base3.png'

const cv = "https://drive.google.com/file/d/1Uwrf_ROwqTGhDaNLth3GCvxFEIFWtA2t/view?usp=drive_link"

import './App.css'
import SocialMedia from './components/SocialMedia'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Contact from './components/Contact'
import { useEffect, useRef } from 'react'

import ClickSpark from './Spark'
import Education from './components/Education'
import Certifications from './components/Certificates'

function App() {




  const sectionRef1 = useRef(null);
  const sectionRef2 = useRef(null);
  const sectionRef3 = useRef(null);
  const sectionRef4 = useRef(null);
  const sectionRef5 = useRef(null);
  const sectionRef6 = useRef(null);









  const handleScroll = (page) =>{
    if( page==='about'
    ){
sectionRef1.current?.scrollIntoView({ behavior: 'smooth' });
    }else if(page==='skills'){
      sectionRef2.current?.scrollIntoView({ behavior: 'smooth' });
    }else if(page==='projects')
    
    {
      sectionRef3.current?.scrollIntoView({ behavior: 'smooth' });
    }else if(page==='education'){
      sectionRef4.current?.scrollIntoView({ behavior: 'smooth' })
    }else if(page === 'certificate'){
      sectionRef5.current?.scrollIntoView({ behavior: 'smooth' })
    }else if(page === 'contact'){
      sectionRef6.current?.scrollIntoView({ behavior: 'smooth' })
    }
   
  
  }
 

  return (
    <>
    
<ClickSpark
  sparkColor='#fff'
  sparkSize={10}
  sparkRadius={15}
  sparkCount={8}
  duration={400}
>

    <div  className='w-full h-auto   z-20    bg-secondary grid grid-cols-1 sm:grid-cols-7   ' >
      <div style={{ backgroundImage: `url(${baseImg})` }} className='bg-cover bg-center bg-no-repeat overflow-hidden sm:col-span-4 col-span-1 bg-secondary relative sm:h-full h-75 flex-col sm:flex-row flex sm:justify-normal sm:items-baseline justify-center items-center '>






          
       
        
        </div>

<div className='col-span-3 flex-col z-20 h-full flex items-center justify-center pt-10 '>
         
        <h1 className='sm:text-5xl flex justify-center col-span-3 text-5xl  top-10 drop-shadow-sm  text-gray-200 font-bold wrap-normal  mt-10 w-1/2 font2'>RASHMIKA</h1>
          <p className='font2  flex justify-center col-span-3 text-gray-400 text-3xl sm:text-5xl '>Dilhara</p>

       <div className='flex  p-10 justify-center h-auto w-full text-text'>
        <ul className='flex flex-wrap gap-5 cursor-pointer transition-all  justify-center  text-lg font-semibold'>
          <li className='hover:text-special transition-all' onClick={() => handleScroll('about')} >About</li>
          <li className='hover:text-special transition-all' onClick={() => handleScroll('skills')}>Skills</li>
          <li className='hover:text-special transition-all' onClick={() => handleScroll('projects')}>Projects</li>
          <li className='hover:text-special transition-all' onClick={() => handleScroll('certificate')}>Achievement</li>
          <li className='hover:text-special transition-all' onClick={() => handleScroll('education')}>Education</li>
          <li className='hover:text-special transition-all' onClick={() => handleScroll('contact')}>Contact</li>
          
          
       
        </ul>


       </div>
        <SocialMedia/>
        

<p className='text-text mt-10 text-2xl text-center '> Intern Level Full Stack Developer </p>



<p className='text-gray-400 mt-2 text-sm pt-2 pl-10 pr-10  text-center '>I am a passionate and dedicated full-stack developer with a strong foundation in both front-end and back-end technologies. I thrive on creating dynamic and responsive web applications that provide exceptional user experiences.</p>
 
<a href={cv} target='_blank'  className=' mb-20 font-bold text-special px-4 py-2 mt-5 rounded-sm  transition-all'>Download Resume</a>
       
       </div>




    </div>
    
    <div ref={sectionRef1} >
<About/>
</div>
<div className='w-full md:h-0 h-[800px] bg-secondary '></div>
<div ref={sectionRef2} >
<Skills/>
</div>
  <div ref={sectionRef3} >
<Projects/>
  </div>
    <div ref={sectionRef5} >
<Certifications/>
  </div>
  
  <div ref={sectionRef4} >
<Education/>
  </div>
<div ref={sectionRef6} >
<Contact/>
  </div>






 
<Footer ></Footer>
   </ClickSpark>
   
    </>
  )
}

export default App
