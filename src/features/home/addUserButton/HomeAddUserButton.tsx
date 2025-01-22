import { Button } from 'antd';
import { useClickHandler } from './hooks';

type HomeAddUserButtonType = 'primary' | 'dashed' | 'link';

interface HomeAddUserButtonProps {
	type: HomeAddUserButtonType;
}

const HomeAddUserButton = ({ type }: HomeAddUserButtonProps) => {
	const clickHandler = useClickHandler();

	return (
		<Button onClick={clickHandler} type={type}>
			Add user
		</Button>
	);
};

export default HomeAddUserButton;
