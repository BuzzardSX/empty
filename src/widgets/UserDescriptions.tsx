import { Descriptions } from 'antd';
import { useItems } from './hooks';

const UserDescriptions = () => {
	const items = useItems();

	return (
		<Descriptions items={items} title='User info' />
	);
};

export default UserDescriptions;
