import ProgressBar from "./Progressbar";

const Skills = () => {
  return (
    <div className='w-full bg-secondary p-10  sm:pt-32'>
      <h1 className='text-4xl font-bold text-text font2 text-center'>My Skills</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 mt-10'>
        <div className='col-span-1 flex flex-col items-center '>
          <ProgressBar name="HTML" progress={90} />
          <ProgressBar name="CSS" progress={80} />
          <ProgressBar name="JavaScript" progress={70} />
          <ProgressBar name="React" progress={65} />
        </div>
        <div className='col-span-1 flex flex-col items-center'>
          <ProgressBar name="Tailwind CSS" progress={80} />
          <ProgressBar name="Node Js" progress={50} />
          <ProgressBar name="Express Js" progress={50} />
          <ProgressBar name="MongoDB" progress={75} />
        </div>
      </div>
    </div>
  );
}

export default Skills;