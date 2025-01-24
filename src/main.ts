import '@ant-design/v5-patch-for-react-19';
import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import { Root } from './app';

async function enableMocking() {
	const { worker } = await import('./mocks');

	return worker.start();
}

const app = document.getElementById('app');

const root = createElement(Root);

enableMocking().then(() => createRoot(app!).render(root));
