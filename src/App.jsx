
import baseImg from './img/base.png'

const cv = "https://drive.google.com/file/d/1Uwrf_ROwqTGhDaNLth3GCvxFEIFWtA2t/view?usp=drive_link"

import './App.css'
import SocialMedia from './components/SocialMedia'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonDigging } from '@fortawesome/free-solid-svg-icons'

function App() {

  const sectionRef1 = useRef(null);
  const sectionRef2 = useRef(null);
  const sectionRef3 = useRef(null);

  const handleScroll = (page) =>{
    if( page==='about'
    ){
sectionRef1.current?.scrollIntoView({ behavior: 'smooth' });
    }else if(page==='skills'){
      sectionRef2.current?.scrollIntoView({ behavior: 'smooth' });
    }else if(page==='projects'
    ){
      sectionRef3.current?.scrollIntoView({ behavior: 'smooth' });
    }
   
  
  }

  return (
    <>

    <div  className='w-full h-auto      bg-secondary grid grid-cols-1 sm:grid-cols-7   ' >
      <div style={{ backgroundImage: `url(${baseImg})` }} className='bg-cover  bg-no-repeat overflow-hidden sm:col-span-4 col-span-1 bg-secondary relative sm:h-full h-95 flex-col sm:flex-row flex sm:justify-normal sm:items-baseline justify-center items-center '>



          
       
        
        </div>

<div className='col-span-3 flex-col  h-full flex items-center pt-10 '>
         <h1 className='sm:text-6xl text-5xl  top-10 drop-shadow-sm left-10 text-gray-200 font-bold wrap-normal ml-10 mt-10 w-1/2 font3'>RASHMIKA <p className='font2 text-gray-400 text-3xl sm:text-5xl '>Dilhara</p></h1>
        


       <div className='flex  p-10 justify-center h-auto w-full text-text'>
        <ul className='flex gap-5 cursor-pointer transition-all  justify-center  text-lg font-semibold'>
          <li className='hover:text-special transition-all' onClick={() => handleScroll('about')} >About</li>
          <li className='hover:text-special transition-all' onClick={() => handleScroll('skills')}>Skills</li>
          <li className='hover:text-special transition-all' onClick={() => handleScroll('projects')}>Projects</li>
          <li className='hover:text-special transition-all' >Contact</li>
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
  <div className='bg-gray-500 text-2xl justify-center flex flex-col items-center  text-amber-50 p-10'>
<FontAwesomeIcon icon={faPersonDigging} className='text-6xl'/>  Under Construction
  </div>
 
<Footer ></Footer>
   
    </>
  )
}

export default App
