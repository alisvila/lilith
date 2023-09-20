import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const chatApi = createApi({
  reducerPath: "chatApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getChatHistory: builder.query<string, string>({
      query: (id) => `chat/${id}`,
    }),
  }),
});

export const { useGetChatHistoryQuery } = chatApi;
