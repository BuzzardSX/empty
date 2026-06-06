import '@ant-design/v5-patch-for-react-19';
import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import { Root } from './app';

const app = document.getElementById('app');

const root = createElement(Root);

createRoot(app!).render(root);
