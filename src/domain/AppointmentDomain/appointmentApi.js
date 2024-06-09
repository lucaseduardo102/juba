import { api } from "../../api";

const PATH = "appointments";

async function create(request) {
  const { data } = await api.post(PATH, request);
  return data;
}

async function getByUserId(userId) {
  const { data } = await api.get(PATH + "/by-user/" + userId);
  return data;
}
async function getById(appointmentId) {
  const { data } = await api.get(PATH + "/" + appointmentId);
  return data;
}
async function update({
  appointmentId,
  clientId,
  employeeId,
  specialtyId,
  date,
  time,
  appointmentStatus,
}) {
  const response = await api.patch(PATH + "/" + appointmentId, {
    clientId,
    employeeId,
    specialtyId,
    date,
    time,
    appointmentStatus,
  });
  return response.data;
}

export const appointmentApi = { create, getByUserId, getById, update };
