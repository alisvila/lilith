// import axios from "axios";
// // import BaseProducts from "src/types/Products";
// import type User from "../types/User";

// const BASE_URL = "http://localhost:3004";

// // export const getProducts = async (): Promise<{ products: BaseProducts[] }> => {
// //   return fetch(`${BASE_URL}/products`).then((res) => res.json());
// // };

// export const getUser = (id: number): Promise<User> =>
//   fetch(`${BASE_URL}/users/${id}`).then((res) => res.json());

// export const createUser = async (user: User): Promise<User> =>
//   fetch(`${BASE_URL}/users`, {
//     method: "POST",
//     headers: {
//       "content-type": "application/json",
//     },
//     body: JSON.stringify(user),
//   }).then((res) => res.json());

// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type User from "../types/User";

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<User, string>({
      query: (name) => `pokemon/${name}`,
    }),
    //TODO: fix types
    createUser: builder.mutation<User, Partial<User> & Pick<User, "id">>({
      query: ({ id, ...payload }) => ({
        url: `user`,
        method: "POST",
        body: payload,
      }),
      transformResponse: (response: { data: User }) => response.data,
    }),
    updateUser: builder.mutation<User, Partial<User> & Pick<User, "id">>({
      // note: an optional `queryFn` may be used in place of `query`
      query: ({ id, ...payload }) => ({
        url: `user/${id}`,
        method: "PATCH",
        body: payload,
      }),
      // Pick out data and prevent nested properties in a hook or selector
      transformResponse: (response: { data: User }) => response.data,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetPokemonByNameQuery,
  useUpdateUserMutation,
  useCreateUserMutation,
} = pokemonApi;
