import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const doctorApi = createApi({
  reducerPath: "doctorApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getDocList: builder.query<string, string>({
      query: () => `Doctor/`,
    }),
  }),
});

export const { useGetDocListQuery } = doctorApi;
