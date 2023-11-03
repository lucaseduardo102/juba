import {userApi} from '../userApi';
import {useApiFetchState} from '../../infra/useApiFetchState';

export function useUserList() {
  return useApiFetchState({
    apiFn: userApi.getList,
  });

}
