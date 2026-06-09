import type { PanelProps } from './panel';
import { Action } from '~/components/action';
import style from './panel.module.css';

const Panel = (p: PanelProps) => (
	<div>
		{p.items.map(({ text, key}) => (
			<Action key={key} className={style.action}>{text}</Action>
		))}
	</div>
);

export default Panel;
