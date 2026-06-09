import type { ActionProps } from './action';
import style from './action.module.css';

const Action = ({ className, ...p }: ActionProps) => (
	<button className={`${style.root} ${className}`} {...p} />
);

export default Action;
