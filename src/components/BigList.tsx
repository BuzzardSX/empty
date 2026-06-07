interface Item {
	id: number;
	text: string;
}

interface Props {
	items: Item[];
}

const BigList = ({ items }: Props) => (
	<ul>
		{items.map((i) => (
			<li key={i.id}>
				{i.text}
			</li>
		))}
	</ul>
);

export default BigList;
