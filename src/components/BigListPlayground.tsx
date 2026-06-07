import {
	type ChangeEventHandler,
	useState
} from 'react';

const BigListPlayground = () => {
	const [text, setText] = useState('');

	const inputChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
		setText(e.target.value);
	};

	return (
		<div>
			<div>
				<h2>Список элементов</h2>
			</div>
			<div>
				<input value={text} onChange={inputChangeHandler} />
			</div>
		</div>
	);
};

export default BigListPlayground;
