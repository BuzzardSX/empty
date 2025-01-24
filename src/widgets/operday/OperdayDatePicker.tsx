import { DatePicker } from 'antd';
import { useGetOperdayAllQuery } from '~/api/emptyApi';
import type { OperdayDatePickerProps } from './operdayWidgets';

const OperdayDatePicker = ({ showCanceled = false }: OperdayDatePickerProps) => {
	const { data } = useGetOperdayAllQuery();

	return (
		<DatePicker />
	);
}

export default OperdayDatePicker;
