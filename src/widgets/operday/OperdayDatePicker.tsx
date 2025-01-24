import { DatePicker } from 'antd';
import { useGetOperdayAllQuery } from '~/api/emptyApi';

const OperdayDatePicker = () => {
	const { data, isSuccess } = useGetOperdayAllQuery();

	if (isSuccess) {
		return (
			<DatePicker
				disabledDate={(currentDate) => {
					return !data.some(operday => operday.dateString === currentDate.format('YYYY-MM-DD'));
				}}
				showNow={false}
			/>
		);
	} else {
		return;
	}
}

export default OperdayDatePicker;
