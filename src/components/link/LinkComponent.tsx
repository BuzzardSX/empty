import type { MouseEvent } from 'react';
import { LinkProps } from './link';

const Link = (p: LinkProps) => {
	const anchorClickHandler = (e: MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();

		history.pushState({}, '', p.href);
	};

	return (
		<a href={p.href} onClick={anchorClickHandler}>
			{p.children}
		</a>
	);
};

export default Link;
