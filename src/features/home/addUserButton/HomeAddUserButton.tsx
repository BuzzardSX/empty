import { Button } from 'antd';
import type { HomeAddUserButtonProps } from '../homeFeature';
import { useClickHandler } from './hooks';

const HomeAddUserButton = ({ type }: HomeAddUserButtonProps) => {
	const clickHandler = useClickHandler();

	return (
		<Button onClick={clickHandler} type={type}>
			Add user
		</Button>
	);
};

export default HomeAddUserButton;
