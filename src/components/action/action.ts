import { type ReactNode, lazy } from 'react';

export interface ActionProps {
	children: ReactNode;
	className?: string;
	disabled?: boolean;
	method?: () => void;
	primary?: boolean;
}

export const Action = lazy(() => import('./ActionComponent'));
