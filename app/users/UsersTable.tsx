import { sort } from 'fast-sort';
import Link from "next/link";

interface User {
	id: number;
	name: string;
	email: string;
}

interface Props {
	sortOrder: "name" | "email";
}

const UsersTable = async ({ sortOrder }: Props) => {

	const res = await fetch('https://jsonplaceholder.typicode.com/users', {
		cache: 'no-cache'
	})
	let users: User[] = await res.json()
	users = sort(users).asc(user => user[sortOrder]);
	return (
		<table className='table table-bordered'>
			<thead>
			<tr>
				<th>
					<Link href={{ pathname: '/users', query: { sortOrder: 'name' } }}>
						Name
					</Link>
				</th>
				<th>
					<Link href={{ pathname: '/users', query: { sortOrder: "email" } }}>
						Email
					</Link>
				</th>
			</tr>
			</thead>
			<tbody>
			{users.map(user => (
				<tr key={user.id}>
					<td>{user.name}</td>
					<td>{user.email}</td>
				</tr>
			))}
			</tbody>
		</table>
	)
}
export default UsersTable;