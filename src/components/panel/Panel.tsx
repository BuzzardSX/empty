import { Action } from '~/components/action';

interface Item {
	key: string | number;
	text: string;
}

interface Props {
	items: Item[];
}

const Panel = (p: Props) => (
	<div>
		{p.items.map(({ text, ...i}) => (
				<Action>{text}</Action>
		))}
	</div>
);

export default Panel;
