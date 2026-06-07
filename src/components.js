import { useTransition } from 'react';

export const Button = () => {
	const [isPending, startTransition] = useTransition();

	return (
		<button>Click me</button>
	);
};
