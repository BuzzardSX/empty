import { http, HttpResponse } from 'msw';

const handlers = [
	http.get('/user', () => HttpResponse.json({ name: 'Mike', age: 19 })),
	http.get<never, never, Array<{ id: number, dateString: string }>>('/operday/all', () => HttpResponse.json([
		{
			id: 1,
			dateString: '2024-02-01'
		}
	]))
];

export default handlers;
