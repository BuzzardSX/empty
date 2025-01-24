import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

interface User {
	name: string;
	age: number;
}

const emptyApi = createApi({
	reducerPath: 'emptyApi',
	baseQuery: fetchBaseQuery({ baseUrl: '' }),
	endpoints: (builder) => ({
		getUser: builder.query<User, void>({
			query: () => '/user'
		})
	})
});

export const { middleware, useGetUserQuery } = emptyApi;

export default emptyApi;
