import {EmployeeResponse, employeeApi} from '@domain';
import {useApiFetchState} from '@infra';

export function useEmplyeeFindByProfile(profileId: string) {
  return useApiFetchState<EmployeeResponse>({
    apiFn: () => employeeApi.findByProfileId(profileId),
  });
}
