import { createElement } from 'react';
import type { PanelProps } from './panelIndex';
import { Action } from '../action';
// import classes from './panel.module.css';

const Panel = (p: PanelProps) => createElement(
	'div',
	null,
	p.items.map(({ text, key}) => createElement(
		Action,
		{
			key,
			// className: classes.action,
			method: () => alert(key)
		},
		text
	))
);

export default Panel;
