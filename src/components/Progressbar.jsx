const ProgressBar = ({ name,progress }) => {
return (<>
<div className=" w-full p-2 flex justify-center items-center flex-col">
<h1 className='text-md font-bold  text-text'>{name}</h1>
<div className='w-2/3 h-7 bg-gray-700 rounded-sm mt-2'>
<div className={'font1 h-7 bg-special rounded-sm flex justify-end pr-5 font-bold items-center text-md'} style={{ width: `${progress}%` }}>
{progress}%
</div>
</div></div>
</>);
}
export default ProgressBar;