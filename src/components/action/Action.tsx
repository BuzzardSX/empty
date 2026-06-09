import type { ActionProps } from './action';
import style from './action.module.css';

const Action = ({ className, ...p }: ActionProps) => {
	const cls = [style.root, className].join(' ');

	return (
		<button className={cls} {...p} />
	);
};

export default Action;
