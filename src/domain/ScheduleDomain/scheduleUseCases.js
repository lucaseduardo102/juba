import { useQuery } from "@tanstack/react-query";
import { QueryKeys, invalidateQueries } from "../../services";
import { scheduleApi } from "./scheduleApi";

export function useScheduleGetSchedule({ specialtyId = null } = {}) {
  return useQuery({
    queryKey: [QueryKeys.ScheduleGetSchedule, specialtyId],
    queryFn: () => scheduleApi.getSchedule(specialtyId),
  });
}

export function useScheduleGetDaysOfAttendance() {
  return useQuery({
    queryKey: [QueryKeys.DaysOfAttendance],
    queryFn: scheduleApi.getDaysOfAttendance,
  });
}
