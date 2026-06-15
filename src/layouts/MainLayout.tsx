import { type MouseEvent, ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

const links: string[] = ['/', '/about'];

const MainLayout = (p: Props) => {
	const anchorClickHandler = (e: MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();

		history.pushState({}, '', '/about');
	};

	return (
		<div>
			<div>
				{links.map((l) => (
					<a href={l} onClick={anchorClickHandler}>About</a>
				))}
			</div>
			<div>{p.children}</div>
		</div>
	);
};

export default MainLayout;
