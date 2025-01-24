import { http, HttpResponse } from 'msw';
import type { Operday } from '~/entities';

const handlers = [
	http.get('/user', () => HttpResponse.json({ name: 'Mike', age: 19 })),
	http.get<never, never, Operday[]>('/operday/all', () => HttpResponse.json([
		{
			id: 1,
			dateString: '2025-01-26',
			statusId: 1
		},
		{
			id: 1,
			dateString: '2025-02-22',
			statusId: 1
		}
	]))
];

export default handlers;
