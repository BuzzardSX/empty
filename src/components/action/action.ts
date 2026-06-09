import { type ReactNode, lazy } from 'react';

export interface ActionProps {
	children: ReactNode;
	className?: string;
	method?: () => {};
}

export const Action = lazy(() => import('./Action'));
