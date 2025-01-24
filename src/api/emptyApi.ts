import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';
import type { Operday } from '~/entities';

interface User {
	name: string;
	age: number;
}

const emptyApi = createApi({
	reducerPath: 'emptyApi',
	baseQuery: fetchBaseQuery({ baseUrl: '' }),
	endpoints: ({ query }) => ({
		getOperdayAll: query<Operday[], void>({
			query: () => '/operday/all'
		}),
		getUser: query<User, void>({
			query: () => '/user'
		})
	})
});

export const { middleware, useGetOperdayAllQuery, useGetUserQuery } = emptyApi;

export default emptyApi;
