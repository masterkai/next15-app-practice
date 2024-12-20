'use client';
import { useRouter } from "next/navigation";

const CreatUser = () => {
	const router = useRouter();
	return (
		<div>
			<h1>Create User</h1>
			<button className='btn bg-slate-300' onClick={() => router.push('/users')}>Create</button>
		</div>
	)
}

export default CreatUser