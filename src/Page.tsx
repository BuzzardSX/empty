import { BigListPlayground } from './components';
import { Action } from './components/action';
import { Panel } from './components/panel';

const panelItems = [
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

const Page = () => {
	return (
		<div>
			<div>
				<Panel items={panelItems} />
			</div>
			<div>
				<Action>Act it</Action>
			</div>
			<div>
				<BigListPlayground />
			</div>
		</div>
	);
};

export default Page;
