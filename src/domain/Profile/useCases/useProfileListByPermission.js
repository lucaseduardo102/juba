import {useEffect} from 'react';
import {ProfileResponse, profileApi} from '@domain';
import {useApiFetchState} from '@infra';

export function useProfileListByPermission(userId: number) {
  return useApiFetchState<ProfileResponse[]>({
    apiFn: () => profileApi.getListByPermission(userId),
  });
}
