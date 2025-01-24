import { Button } from 'antd';
import { useEffect, useState } from 'react';
import type { HomeAddUserButtonProps } from '../homeFeature';
import { useClickHandler } from './hooks';

interface User {
	name: string;
	age: number;
}

const HomeAddUserButton = ({ type }: HomeAddUserButtonProps) => {
	const [user, setUser] = useState<User>({ name: 'Initial.', age: 0 });

	const clickHandler = useClickHandler();

	useEffect(
		() => {
			const fetchData = async () => {
				const response = await fetch('/user');

				const json = (await response.json()) as User;

				setUser(json);
			};

			fetchData();
		},
		[]
	);

	return (
		<Button onClick={clickHandler} type={type}>
			Add user
		</Button>
	);
};

export default HomeAddUserButton;
