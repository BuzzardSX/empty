import { type ChangeEventHandler, useState } from 'react';
import BigList from './BigList';

const BigListPlayground = () => {
	const [text, setText] = useState('');

	const allItems = Array.from({ length: 10_000 }, (v, i) => ({
		id: i + 1,
		text: `Item #${i + 1}`
	}));

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
			<div>
				<button onClick={() => setText('')}>
					Clear
				</button>
			</div>
			<div>
				<BigList items={allItems} />
			</div>
		</div>
	);
};

export default BigListPlayground;
