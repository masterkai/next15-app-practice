// @flow 
import * as React from 'react';
import { notFound } from "next/navigation";

type Props = {
	params: {
		id: number;
	}
};
 const UserDetailPage = async ({ params }: Props) => {
	const { id } = await params;
	 if (id > 10) notFound()
	 return (
		<div>
			<h1>UserDetailPage: {id}</h1>
		</div>
	);
};

export default UserDetailPage;