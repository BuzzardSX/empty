import { lazy } from 'react';

export interface PanelItem {
	key: string | number;
	text: string;
}

export interface PanelProps {
	items: PanelItem[];
}

export const Panel = lazy(() => import('./PanelComponent'));
