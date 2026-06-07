import { useState } from 'react';

const BigListPlayground = () => {
	const [text, setText] = useState('');

	return (
		<div>
			<h2>Список элементов</h2>
			<input value={text} />
		</div>
	);
};

export default BigListPlayground;
