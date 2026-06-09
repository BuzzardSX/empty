import { Action } from '~/components/action';

interface Item {
	key: string;
	text: string;
}

interface Props {
	items: Item[];
}

const Panel = (p: Props) => (
	<div>
		{p.items.map(({ text, ...i}) => {
			return (
				<Action>{text}</Action>
			)
		})}
	</div>
);

export default Panel;
