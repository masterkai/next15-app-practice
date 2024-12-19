interface User {
	id: number;
	name: string;
}

const UsersPage = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users', {
		next: {
			revalidate: 10
		}
	})
	const users: User[] = await res.json()
	return (
		<>
			<h1>Users</h1>
			<p>{new Date().toLocaleString()}</p>
			<ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>
		</>
	)

}

export default UsersPage;