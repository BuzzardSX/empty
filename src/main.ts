import { createElement } from 'react';
import { createRoot } from 'react-dom/client';

const app = document.getElementById('app');

createRoot(app!).render(createElement('div'));
