import {useEffect} from 'react';
import {categoryApi} from '@domain';
import {useApiFetchState} from '@infra';

export function useCategoryList() {
  const state = useApiFetchState({
    apiFn: categoryApi.getList,
  });

  useEffect(() => {
    state.fetchData();
  }, []);

  return {
    ...state,
    refresh: state.fetchData,
  };
}
