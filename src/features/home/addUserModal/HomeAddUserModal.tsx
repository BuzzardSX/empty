import { Modal } from 'antd';
import { useOpen } from './hooks';

const HomeAddUserModal = () => {
	const open = useOpen();

	return (
		<Modal open={open}>
			Modal content.
		</Modal>
	);
};

export default HomeAddUserModal;
