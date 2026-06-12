import type { ActionProps } from './action';
import classes from './action.module.css';

const Action = ({ className, method, ...p }: ActionProps) => {
	const cls = [classes.root, className].join(' ');

	const handleClick = () => {
		method?.();
	};

	return (
		<button className={cls} onClick={handleClick} {...p} />
	);
};

export default Action;
