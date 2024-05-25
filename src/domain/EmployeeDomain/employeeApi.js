import { api } from "../../api";

const PATH = "/employees";

async function create(profileId) {
  return await api.post(PATH, { profileId });
}

async function getAll(available) {
  const { data } = await api.get(PATH, { params: { available } });
  return data;
}

async function update({ employeeId, workingHourId }) {
  return await api.patch(PATH + "/" + employeeId, {
    workingHourId,
  });
}
export const employeeApi = {
  create,
  getAll,
  update,
};
