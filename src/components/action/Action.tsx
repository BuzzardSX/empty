import { ActionProps } from './action';
import style from './action.module.css';

const Action = (p: ActionProps) => (
	<button className={style.root} {...p} />
);

export default Action;
