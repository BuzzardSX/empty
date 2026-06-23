import { type ReactNode, lazy } from 'react';

export interface LinkProps {
	children: ReactNode;
	href: string;
}

export const Link = lazy(() => import('./LinkComponent'));
