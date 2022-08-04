import { api } from "../../../shared/api/api";
import { Endpoints } from "./constants/endpoints";

export const getActors = async (page: number) => {
  const { data } = await api.get(Endpoints.ACTORS, {
    params: {
      page: page,
    },
  });
  return data;
};
