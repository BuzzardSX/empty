import { useSelector } from 'react-redux';

const Page = () => {
	useSelector(value => console.log(value));

	return (
		<div>App content.</div>
	);
};

export default Page;
