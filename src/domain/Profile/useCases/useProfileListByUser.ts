import {useEffect} from 'react';
import {profileApi} from '@domain';
import {useApiFetchState} from '@infra';

export function useProfileListByUser(userId: string) {
  const state = useApiFetchState({
    apiFn: () => profileApi.getListByUser(userId),
  });

  return {
    ...state,
    refresh: state.fetchData,
  };
}
