import { Link } from '../components/link';
import type { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

interface Link {
	href: string;
	text: ReactNode;
}

const links: Link[] = [
	{
		href: '/',
		text: 'Home'
	},
	{
		href: '/about',
		text: 'About'
	}
];

const MainLayout = (p: Props) => (
	<div>
		<div>
			{links.map((l) => (
				<Link href={l.href}>
					{l.text}
				</Link>
			))}
		</div>
		<div>{p.children}</div>
	</div>
);

export default MainLayout;
