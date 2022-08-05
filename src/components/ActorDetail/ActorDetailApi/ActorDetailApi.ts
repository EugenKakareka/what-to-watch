import { api } from "../../../shared/api/api";

export const getActor = async (id: number) => {
  const { data } = await api.get(`/person/${id}`);
  return data;
};
