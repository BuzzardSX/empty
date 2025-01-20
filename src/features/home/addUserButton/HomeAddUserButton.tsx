import { Button } from 'antd';
import { useClickHandler } from './hooks';

const HomeAddUserButton = () => {
	const clickHandler = useClickHandler();

	return (
		<Button onClick={clickHandler}>
			Add user
		</Button>
	);
};

export default HomeAddUserButton;
