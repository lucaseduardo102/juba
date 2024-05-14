import { api } from "../../api";

const PATH = "schedules";

async function getSchedule(specialtyId = null) {
  const { data } = await api.get(PATH, { params: { specialtyId } });
  return data;
}

async function getDaysOfAttendance() {
  const { data } = await api.get(PATH + "/days-of-attendance");
  return data;
}

export const scheduleApi = { getSchedule, getDaysOfAttendance };
