
type Props = {
	params: {
		id: string;
		photoID: string;
	}
};
const PhotoDetail = ({ params:{id, photoID} }: Props) => {
	return (
		<div>
	<h1>Photo Detail Page UserID:{id} | PhotoID:{photoID}</h1>
		</div>
	);
};

export default PhotoDetail;