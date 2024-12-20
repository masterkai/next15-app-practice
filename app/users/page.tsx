import UsersTable from "@/app/users/UsersTable";

interface Props {
	searchParams: {
		sortOrder: string;
	}
}

const UsersPage = async ({searchParams}:Props) => {

	return (
		<>
			<h1>Users</h1>

			<UsersTable sortOrder={ searchParams.sortOrder }/>
		</>
	)

}

export default UsersPage;