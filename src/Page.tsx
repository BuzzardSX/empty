import { BigListPlayground } from './components';
import { Action } from './components/action';
import { Panel } from './components/panel';

const Page = () => (
	<div>
		<div>
			<Panel items={[]} />
		</div>
		<div>
			<Action>Act it</Action>
		</div>
		<div>
			<BigListPlayground />
		</div>
	</div>
);

export default Page;
