const ProgressBar = ({ name,progress }) => {
return (<>
<div className=" w-full p-2 flex justify-center items-center flex-col">
<h1 className='text-2xl font-bold mt-5 text-text'>{name}</h1>
<div className='w-2/3 h-10 bg-accent rounded-sm mt-2'>
<div className={'font1 h-10 bg-special rounded-sm flex justify-end pr-5 font-bold items-center text-xl'} style={{ width: `${progress}%` }}>
{progress}%
</div>
</div></div>
</>);
}
export default ProgressBar;