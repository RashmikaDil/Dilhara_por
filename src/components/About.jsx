
import '../App.css'


const About = () => {

    return(<>
    
    <div className='w-full h-auto bg-accent grid grid-cols-1 sm:grid-cols-5'>


        <div className='sm:col-span-2 col-span-1 h-full flex items-center justify-center'>

<h1 className='text-4xl sm:text-6xl font-bold text-text font2 p-2'>About Me</h1>

        </div>
        <div className='sm:col-span-3 col-span-1 h-full flex items-center justify-center p-10'>

            <p className=' text-lg sm:text-sm text-gray-400'>
                <span className='text-text '>Hi, I'm Rashmika</span> — a passionate web development student currently pursuing my degree and actively looking for internship opportunities to grow and apply my skills in real-world projects.
                <br></br>I specialize in building responsive and dynamic web applications using technologies like HTML, CSS, JavaScript, React, MongoDB, Express.js, and Node.js. I love turning ideas into functional, clean, and user-friendly web experiences.
                <br></br>Coding isn’t just what I do ! it’s what I genuinely enjoy. I’m always exploring new tools, frameworks, and best practices to sharpen my craft.
            </p>
            
    </div>
    
    
    </div>
    <div className='w-full h-50  relative'>
    <div className='w-full h-50 bg-accent '></div>
    <div className='w-full h-50  absolute top-[-5px]'>
<div className='flex md:flex-row flex-col  justify-center items-center gap-20 p-10'>

    <div className='relative bg-gg sm:col-span-2 col-span-1 h-60 w-60 flex flex-col items-center justify-center hover:bg-special transition-all duration-300 scale-100 hover:scale-110 cursor-pointer shadow-2xl'>
<h1 className='text-2xl bg-special p-1 mt-2 rounded-full w-10 h-10 flex justify-center items-center font-bold text-text absolute top-0'>01</h1>
    <h1 className='text-3xl font-bold text-text'>UI & UX</h1>
    <p className='text-gray-100 text-center pt-0'>UI UX Designing With Figma</p>
    </div>
    <div className='relative bg-gg sm:col-span-2 col-span-1 h-60 w-60 flex flex-col items-center justify-center hover:bg-special transition-all duration-300 scale-100 hover:scale-110 cursor-pointer shadow-2xl'>
<h1 className='text-2xl bg-special p-1 mt-2 rounded-full w-10 h-10 flex justify-center items-center font-bold text-text absolute top-0'>02</h1>
    <h1 className='text-3xl font-bold text-text'>FRONTEND</h1>
    <p className='text-gray-100 text-center pt-0 p-2'>HTML+CSS+JS , REACT JS , TAILWIND CSS</p>
    </div>
     <div className='relative bg-gg sm:col-span-2 col-span-1 h-60 w-60 flex flex-col items-center justify-center hover:bg-special transition-all duration-300 scale-100 hover:scale-110 cursor-pointer shadow-2xl'>
<h1 className='text-2xl bg-special p-1 mt-2 rounded-full w-10 h-10 flex justify-center items-center font-bold text-text absolute top-0'>03</h1>
    <h1 className='text-3xl font-bold text-text'>BACKEND</h1>
    <p className='text-gray-100 text-center pt-0 p-2'>NODE JS , EXPRESS JS & MONGODB</p>
    </div>
    
</div>

 
</div>

</div>



   
    </>);
}


export default About;