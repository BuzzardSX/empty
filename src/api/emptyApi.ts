import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

interface User {
	name: string;
	age: number;
}

const emptyApi = createApi({
	reducerPath: 'emptyApi',
	baseQuery: fetchBaseQuery({ baseUrl: '' }),
	endpoints: ({ query }) => ({
		getOperdayAll: query<Array<{ id: number, dateString: string }>, void>({
			query: () => '/operday/all'
		}),
		getUser: query<User, void>({
			query: () => '/user'
		})
	})
});

export const { middleware, useGetOperdayAllQuery, useGetUserQuery } = emptyApi;

export default emptyApi;
