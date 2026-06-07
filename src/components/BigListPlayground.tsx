import { type ChangeEventHandler, useState } from 'react';
import { default as BigList, type Item } from './BigList';

const BigListPlayground = () => {
	const [text, setText] = useState('');
	const [filteredItems, setFilteredItems] = useState<Item[]>([]);

	const allItems = Array.from({ length: 10_000 }, (e, i) => ({
		id: i + 1,
		text: `Item #${i + 1}`
	}));

	const inputChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
		setText(e.target.value);

		setFilteredItems(allItems.filter((i) => {
			return i.text.toLowerCase().includes(text.toLowerCase());
		}));
	};

	return (
		<div>
			<div>
				<h2>Список: {filteredItems.length} элементов</h2>
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
