import '../App.css'
import p1 from '../img/p1.png'
const Projects = () => {

    return (<>
   
    <div className="flex flex-col items-center  h-auto bg-gg ">
        <h1 className="text-4xl font-bold mb-8 font2 text-text pt-10">My Projects</h1>
        <h1 className="text-8xl text-special font-extrabold font2  ">01</h1>
        <h1 className="text-md text-text font-semibold mb-4">Completed !</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 w-full px-10">


            <div className="bg-accent p-0 pb-5 rounded-sm shadow-lg hover:shadow-xl scale-100 hover:scale-105 cursor-pointer  transition-all duration-300">
                <img src={p1} alt="Project 1" className="w-full h-48 object-cover rounded-sm mb-4" />
                
                <h2 className="text-xl font-bold text-text mb-2 pl-5">Adventure Lanka</h2>
                <p className="text-gray-400 text-sm pl-5">Discover Lanka is a web-based platform designed to help travelers explore Sri Lanka by providing detailed information, ratings, and user reviews of popular and hidden tourist destinations across the island. The website aims to be a one-stop travel guide, helping both local and international tourists make informed decisions about where to go, what to see, and what to expect.</p>

                <a href='https://adventurelanaka.netlify.app/' target='_BLANK' rel='' className=" mb-10 mt-4 px-4 py-2 text-special cursor-pointer hover:text-special/95">View Project</a>
            </div>
             <div className="bg-accent p-0 pb-5 rounded-sm shadow-lg hover:shadow-xl scale-100 hover:scale-105 cursor-pointer  transition-all duration-300">
                <img src={p1} alt="Project 1" className="w-full h-48 object-cover rounded-sm mb-4" />
                
                <h2 className="text-xl font-bold text-text mb-2 pl-5">SOON !</h2>
                <p className="text-gray-400 text-sm pl-5"> 


                </p>

                <a href='#' target='_BLANK' rel='' className=" mb-10 mt-4 px-4 py-2 text-special cursor-pointer hover:text-special/95">View Project</a>
            </div>
            
            
            </div>
        </div>
    
    
    
    </>)
}


export default Projects;