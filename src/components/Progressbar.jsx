const ProgressBar = ({ name,progress }) => {
return (<>

<h1 className='text-2xl font-bold mt-5 text-text'>{name}</h1>
<div className='w-2/3 h-10 bg-accent rounded-sm mt-2'>
<div className={'h-10 bg-special rounded-sm '} style={{ width: `${progress}%` }}>

</div>
</div>

</>);
}
export default ProgressBar;