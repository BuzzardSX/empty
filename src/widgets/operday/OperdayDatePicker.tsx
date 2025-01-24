import { DatePicker } from 'antd';
import { useGetOperdayAllQuery } from '~/api/emptyApi';

const OperdayDatePicker = () => {
	const { data } = useGetOperdayAllQuery();

	return (
		<DatePicker />
	);
}

export default OperdayDatePicker;
