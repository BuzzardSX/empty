import { useDispatch } from 'react-redux';
import { showUserModal } from '../homeSlice';

export const useClickHandler = () => {
	const dispatch = useDispatch();

	return () => dispatch(showUserModal());
};
