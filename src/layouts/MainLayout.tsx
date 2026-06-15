import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

const MainLayout = (p: Props) => {
	return (
		<div>
			<div>
				<a href='/about'>About</a>
			</div>
			<div>{p.children}</div>
		</div>
	);
};

export default MainLayout;
