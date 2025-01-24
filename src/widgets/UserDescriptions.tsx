import { Descriptions } from 'antd';
import type { DescriptionsItemType } from 'antd/es/descriptions';
import { useGetUserQuery } from '~/api/emptyApi';

const useItems = () => {
	const { data } = useGetUserQuery();

	return [
		{
			key: 'name',
			label: 'Name',
			children: data?.name
		},
		{
			key: 'age',
			label: 'Age',
			children: data?.age
		}
	] satisfies DescriptionsItemType[];
};

const UserDescriptions = () => {
	const items = useItems();

	return (
		<Descriptions items={items} title='User info' />
	);
};

export default UserDescriptions;
