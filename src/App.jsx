import Me from './img/me.png'
import './App.css'
import SocialMedia from './components/SocialMedia'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'

function App() {

  return (
    <>
    <div className='w-full h-auto   bg-secondary grid grid-cols-1 sm:grid-cols-7  '>
      <div className='sm:col-span-4 col-span-1 bg-secondary relative sm:h-full h-auto flex-col sm:flex-row flex sm:justify-normal sm:items-baseline justify-center items-center '>
        
    
<img src={Me} alt="My Image" className='w-1/2 sm:right-0   sm:bottom-0 sm:absolute h-auto  drop-shadow-lg' />
       
            <h1 className='sm:text-6xl text-5xl  top-10 drop-shadow-sm left-10 text-gray-200 font-bold wrap-normal ml-10 mt-10 w-1/2 font3'>RASHMIKA <p className='font2 text-gray-400 text-3xl sm:text-5xl '>Dilhara</p></h1>
        
        <SocialMedia/>
        
        
        </div>

<div className='col-span-3 flex-col  h-full flex items-center pt-10 '>
       

       <div className='flex  p-10 justify-center h-auto w-full text-text'>
        <ul className='flex gap-5 cursor-pointer transition-all  justify-center  text-lg font-semibold'>
          <li className='hover:text-special transition-all' >About</li>
          <li className='hover:text-special transition-all'>Skills</li>
          <li className='hover:text-special transition-all'>Projects</li>
          <li className='hover:text-special transition-all'>Contact</li>
        </ul>


       </div>
       
<p className='text-text mt-28 text-2xl text-center '> Intern Level Full Stack Developer </p>

<p className='text-gray-400 mt-2 text-sm pt-2 pl-10 pr-10  text-center '>I am a passionate and dedicated full-stack developer with a strong foundation in both front-end and back-end technologies. I thrive on creating dynamic and responsive web applications that provide exceptional user experiences.</p>

<a href=" " className=' mb-20 font-bold text-special px-4 py-2 mt-5 rounded-sm  transition-all'>Download Resume</a>
       
       </div>




    </div>
    
<About/>
<div className='w-full md:h-0 h-[800px] bg-secondary '></div>

<Skills/>
<Projects/>
     
    </>
  )
}

export default App
