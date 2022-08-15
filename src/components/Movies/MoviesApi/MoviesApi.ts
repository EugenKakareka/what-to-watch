import { api } from "../../../shared/api/api";
import { Endpoints } from "./constants/endpoints";

export const getMovies = async (page: number) => {
  const { data } = await api.get(Endpoints.MOVIES, {
    params: {
      page: page,
    },
  });
  return data;
};