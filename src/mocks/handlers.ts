import { http, HttpResponse } from 'msw';

const handlers = [
	http.get('/user', () => HttpResponse.json({ name: 'Mike', age: 19 }))
];

export default handlers;
