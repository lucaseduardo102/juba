import {userApi} from '@domain';
import {useApiFetchState} from '@infra';

export function useUserUpdate(
  userId,
  email,
  password,
  permissionId,
) {
  return useApiFetchState({
    apiFn: () => userApi.update(userId, email, password, permissionId),
  });
}
