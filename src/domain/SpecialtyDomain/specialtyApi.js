import { api } from "../../api";

const PATH = "specialties";

async function create({ name, price, timeDuration, categoryId }) {
  const { data } = await api.post(PATH, {
    name,
    price,
    timeDuration,
    categoryId,
  });
  return data;
}

async function update({ specialtyId, name, price, timeDuration, categoryId }) {
  const { data } = await api.patch(PATH + "/" + specialtyId, {
    name,
    price,
    timeDuration,
    categoryId,
  });
  return data;
}

export const specialtyApi = {
  create,
  update,
};
