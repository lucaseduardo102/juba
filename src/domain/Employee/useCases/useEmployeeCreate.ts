import {employeeApi} from '@domain';
import {useApiFetchState} from '@infra';

export function useEmployeeCreate(profileId: string) {
  return useApiFetchState({
    apiFn: () => employeeApi.create(profileId),
  });
}
