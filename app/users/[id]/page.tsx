// @flow 
import * as React from 'react';

type Props = {
	params: {
		id: number;
	}
};
 const UserDetailPage = ({ params: { id } }: Props) => {
	return (
		<div>
			<h1>UserDetailPage: {id}</h1>
		</div>
	);
};

export default UserDetailPage;