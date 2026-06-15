import type { PanelProps } from './panel';
import { Action } from '../action';
import { Fragment } from 'react';
import { createPortal } from 'react-dom';

const Panel = (p: PanelProps) => (
	<Fragment>
		{createPortal(
			<style>{`
				.action:not(:first-child) {
					border-bottom-left-radius: 0;
					border-left: none;
					border-top-left-radius: 0;
				}
				.action:not(:last-child) {
					border-bottom-right-radius: 0;
					border-right: none;
					border-top-right-radius: 0;
				}
			`}</style>,
			document.head
		)}
		<div>
			{p.items.map(({ text, key }) => (
				<Action key={key} className='action' method={() => alert(key)}>
					{text}
				</Action>
			))}
		</div>
	</Fragment>
);

export default Panel;
