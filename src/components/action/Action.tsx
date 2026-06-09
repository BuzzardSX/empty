import type { ActionProps } from './action';
import style from './action.module.css';

const Action = ({ className, disabled, ...p }: ActionProps) => {
	return (
		<button className={`${style.root} ${className}`} {...p} />
	);
};

export default Action;
