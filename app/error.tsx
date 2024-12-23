'use client';

interface Props {
	error: Error;
	reset: () => void;
}

const ErrorPage = ({error, reset}:Props) => {
	console.log("Error", error);
	return (
		<div>
			<h1>An Unexpected Error has Occurred</h1>
			<button className='btn' onClick={()=>reset()}>Retry</button>
		</div>
	);
}
export default ErrorPage;