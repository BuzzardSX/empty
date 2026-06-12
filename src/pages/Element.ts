import { createElement } from 'react';

interface Props {
}

const Element = (p: Props) => createElement(
	'div',
	null,
	'Element content.'
);

export default Element;
