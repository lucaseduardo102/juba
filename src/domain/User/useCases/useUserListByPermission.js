import {userApi} from '@domain';
import {useApiFetchState} from '@infra';

export function useUserListByPermission(id) {
  return useApiFetchState({
    apiFn: () => userApi.getListByPermission(id),
  });
}
