import { lazy } from 'react';

export interface Item {
	key: string | number;
	text: string;
}

export interface Props {
	items: Item[];
}

export const Panel = lazy(() => import('./Panel'));
