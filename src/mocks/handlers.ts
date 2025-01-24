import { http, HttpResponse } from 'msw';

interface Operday {
	id: number;
	dateString: string;
	statusId: number;
}

const handlers = [
	http.get('/user', () => HttpResponse.json({ name: 'Mike', age: 19 })),
	http.get<never, never, Operday[]>('/operday/all', () => HttpResponse.json([
		{
			id: 1,
			dateString: '2024-02-01',
			statusId: 1
		}
	]))
];

export default handlers;
