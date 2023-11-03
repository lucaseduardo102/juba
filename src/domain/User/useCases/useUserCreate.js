import {userApi} from '../userApi';
import {useApiFetchState} from '../../infra/useApiFetchState';

export function useUserCreate(
  email,
  password,
  permissionId,
) {
  return useApiFetchState({
    apiFn: () => userApi.create(email, password, permissionId),
  });
}
