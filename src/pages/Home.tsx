import Element from './Element';
import { BrandUpdateForm } from '../components/brandUpdateForm';
import { Panel, type PanelItem } from '../components/panel';
import { UpdateForm } from '../features/product';

const panelItems: PanelItem[] = [
	{
		key: 1,
		text: 'Act 1'
	},
	{
		key: 2,
		text: 'Act 2'
	},
	{
		key: 3,
		text: 'Act 3'
	}
];

const Copyable = () => (
	<div>
		<span>Text</span>
		<span>&#128203;</span>
	</div>
);

const Home = () => {
	return (
		<div>
			<div>
				<BrandUpdateForm />
			</div>
			<div>
				<UpdateForm />
			</div>
			<div>
				<Copyable />
			</div>
			<div>
				<Element items={[{ key: 1 }]} />
			</div>
			<div>
				<Panel items={panelItems} />
			</div>
		</div>
	);
};

export default Home;
