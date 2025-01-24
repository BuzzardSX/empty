import { DatePicker } from 'antd';
import { useGetOperdayAllQuery } from '~/api/emptyApi';

const OperdayDatePicker = () => {
	const { data } = useGetOperdayAllQuery();

	return (
		<DatePicker
			disabledDate={(...args) => {
				console.log(...args);

				return false;
			}}
			showNow={false}
		/>
	);
}

export default OperdayDatePicker;
