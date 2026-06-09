import type { Props } from './panel';
import { Action } from '~/components/action';

const Panel = (p: Props) => (
	<div>
		{p.items.map(({ text, ...i}) => (
			<Action>{text}</Action>
		))}
	</div>
);

export default Panel;
