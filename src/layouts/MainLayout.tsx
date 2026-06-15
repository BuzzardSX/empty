import { type MouseEvent, ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

const links: string[] = ['/', '/about'];

interface LinkProps {
	children: ReactNode;
	href: string;
}

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

const MainLayout = (p: Props) => (
	<div>
		<div>
			{links.map((l) => (
				<Link href={l}>{l}</Link>
			))}
		</div>
		<div>{p.children}</div>
	</div>
);

export default MainLayout;
