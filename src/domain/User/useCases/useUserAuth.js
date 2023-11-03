import {userApi} from '../userApi';
import {useApiFetchState} from '../../infra/useApiFetchState';

export function useUserAuth(email, password) {
  return useApiFetchState({
    apiFn: () => userApi.auth(email, password),
  });
}
