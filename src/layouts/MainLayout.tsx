import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

const MainLayout = (p: Props) => {
	return <div>{p.children}</div>;
};

export default MainLayout;
