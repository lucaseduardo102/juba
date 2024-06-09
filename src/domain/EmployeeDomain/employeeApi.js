import { api } from "../../api";

const PATH = "/employees";

async function create(profileId) {
  return await api.post(PATH, { profileId });
}

async function getAll(available) {
  const { data } = await api.get(PATH, { params: { available } });
  return data;
}

async function update({ employeeId, workingHourId, specialties }) {
  const { data } = await api.patch(PATH + "/" + employeeId, {
    workingHourId,
    specialties,
  });
  return data;
}

async function getAvailableSpecialties(employeeId, date, time) {
  const { data } = await api.get(
    PATH + "/" + employeeId + "/available-specialties",
    {
      params: { dateTime: date + "T" + time },
    }
  );

  return data;
}

export const employeeApi = {
  create,
  getAll,
  update,
  getAvailableSpecialties,
};
