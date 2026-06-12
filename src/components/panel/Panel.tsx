import type { PanelProps } from './panel';
import { Action } from '../action';
import classes from './pPanel.module.css';

const Panel = (p: PanelProps) => (
	<div>
		{p.items.map(({ text, key}) => (
			<Action key={key} className={classes.action} method={() => alert(key)}>
				{text}
			</Action>
		))}
	</div>
);

export default Panel;
