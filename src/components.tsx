import { useState, useTransition } from 'react';

export const Button = () => {
	const [isPending, startTransition] = useTransition();

	return (
		<button>Click me</button>
	);
};

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
		<div></div>
	);
}
