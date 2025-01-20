import { Button } from 'antd';
import { useDispatch } from 'react-redux';

const HomeAddUserButton = () => {
	const dispatch = useDispatch();

	return (
		<Button>Add user</Button>
	);
};

export default HomeAddUserButton;
