import Link from "next/link";

const NavBar = () => {
	return (
		<div className='flex bg-slate-200 p-5'>
			<Link className='mr-5' href={'/'}>Home</Link>
			<Link href={'/users'}>Users</Link>
		</div>
	);
}

export default NavBar;