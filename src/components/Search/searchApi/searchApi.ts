import { api } from "../../../shared/api/api";

export const searchMovies = async (query: string, page?: number) => {
  const { data } = await api.get("/search/movie", {
    params: {
      query,
      page,
    },
  });
  return data;
};
