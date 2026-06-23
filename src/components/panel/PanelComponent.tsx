import type { PanelProps } from './panel';
import { Action } from '../action';
import { Fragment, useId } from 'react';
import { createPortal } from 'react-dom';

const Panel = (p: PanelProps) => {
	const id = useId();

	return (
		<Fragment>
			{createPortal(
				<style>{`
					.${id}action:not(:first-child) {
						border-bottom-left-radius: 0;
						border-left: none;
						border-top-left-radius: 0;
					}
					.${id}action:not(:last-child) {
						border-bottom-right-radius: 0;
						border-right: none;
						border-top-right-radius: 0;
					}
				`}</style>,
				document.head
			)}
			<div>
				{p.items.map(({ text, key }) => (
					<Action key={key} className={`${id}action`} method={() => alert(key)}>
						{text}
					</Action>
				))}
			</div>
		</Fragment>
	);
};

export default Panel;
