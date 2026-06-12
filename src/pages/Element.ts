import { createElement } from 'react';

interface Item {
	key: string;
}

interface Props {
	items: Item[]
}

const Element = (p: Props) => createElement(
	'div',
	null,
	p.items.map(i => i.key)
);

export default Element;
