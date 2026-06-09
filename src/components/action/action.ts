import { type ReactNode, lazy } from 'react';

export interface ActionProps {
	children: ReactNode;
	onClick?: () => {};
}

export const Action = lazy(() => import('./Action'));
export const Panel = lazy(() => import('./Panel'));
