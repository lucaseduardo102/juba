import { api } from "../../api";

const PATH = "/employees";

async function create(profileId) {
  return await api.post(PATH, { profileId });
}

async function getAll(available) {
  const { data } = await api.get(PATH, { params: { available } });
  return data;
}

async function findByProfileId(profileId) {
  return await api.get(`${PATH}/profile/${profileId}`);
}

async function update(employeeId, profileId, workingHoursId) {
  return await api.patch(`${PATH}/${employeeId}`, {
    profileId,
    workingHoursId,
  });
}
export const employeeApi = {
  create,
  getAll,
  findByProfileId,
  update,
};
