import { Descriptions } from 'antd';
import type { DescriptionsItemType } from 'antd/es/descriptions';

const items: Array<DescriptionsItemType> = [
	{
		key: 'name',
		label: 'Name',
		children: 0
	}
]

const UserDescriptions = () => (
	<Descriptions items={items} title='User info' />
);

export default UserDescriptions;
