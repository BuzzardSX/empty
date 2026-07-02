import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

const api = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: '/'
	}),
	endpoints: () => ({
	})
});

export default api;
