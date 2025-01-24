import type { DescriptionsItemType } from 'antd/es/descriptions';
import { useGetUserQuery } from '~/api/emptyApi';

export const useItems = () => {
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
