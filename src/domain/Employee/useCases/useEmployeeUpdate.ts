import {employeeApi} from '@domain';
import {useApiFetchState} from '@infra';

export function useEmployeeUpdate(
  employeeId: string,
  profileId: string,
  workingHoursId: number,
) {
  return useApiFetchState({
    apiFn: () => employeeApi.update(employeeId, profileId, workingHoursId),
  });
}
