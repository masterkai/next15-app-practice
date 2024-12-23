import UsersTable from "@/app/users/UsersTable";
import Link from "next/link";

interface Props {
    searchParams: {
        sortOrder: "name" | "email";
    }
}

const UsersPage = async (props: Props) => {
    const searchParams = await props.searchParams;
    return (
        <>
            <h1>Users</h1>
            <Link href={`/users/new`}>New User</Link>
            <UsersTable sortOrder={searchParams.sortOrder}/>
        </>
    )

}

export default UsersPage;