import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import { showUserModal } from '../homeSlice';

const HomeAddUserButton = () => {
	const dispatch = useDispatch();

	return (
		<Button onClick={() => {
			dispatch(showUserModal());
		}}>
			Add user
		</Button>
	);
};

export default HomeAddUserButton;
