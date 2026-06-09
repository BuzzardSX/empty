import type { Props } from './panel';
import { Action } from '~/components/action';
import style from './panel.module.css';

const Panel = (p: Props) => (
	<div>
		{p.items.map(({ text, key}) => (
			<Action key={key} className={style.action}>{text}</Action>
		))}
	</div>
);

export default Panel;
