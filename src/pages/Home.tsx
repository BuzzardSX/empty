import Element from './Element';
import { Action } from '../components/action';
import { Panel, type PanelItem } from '../components/panel';

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

const Home = () => {
	return (
		<div>
			<div>
				<Element items={[]} />
			</div>
			<div>
				{/* <Panel items={panelItems} /> */}
			</div>
			<div>
				{/* <Action>Act it</Action> */}
			</div>
		</div>
	);
};

export default Home;
