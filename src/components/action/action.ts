import { type ReactNode, lazy } from 'react';

export interface ActionProps {
	children: ReactNode;
	method?: () => {};
}

export const Action = lazy(() => import('./Action'));
