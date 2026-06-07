import { useState, useTransition } from 'react';

type Tab = 'home' | 'about';

function TabContainer() {
	const [isPending, startTransition] = useTransition();
	const [tab, setTab] = useState<Tab>('about');

	function selectTab(nextTab: Tab) {
		startTransition(() => {
			setTab(nextTab);
		});
	}

	return (
		<div>Tabs</div>
	);
}

export default TabContainer;
