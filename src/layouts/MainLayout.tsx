import { Link } from '../components/link';
import type { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

const links: string[] = ['/', '/about'];

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
