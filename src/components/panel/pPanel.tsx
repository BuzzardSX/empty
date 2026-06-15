import { createElement } from 'react';
import type { PanelProps } from './panelIndex';
import { Action } from '../action';
// import classes from './panel.module.css';

const Panel = (p: PanelProps) => (
	<div>
		{p.items.map(({ text, key }) => (
			<Action key={key} className={''} method={() => alert(key)}>
				{text}
			</Action>
		))}
	</div>
)

export default Panel;
