import {categoryApi} from '@domain';
import {useApiFetchState} from '@infra';

export function useCategoryCreate(name: string) {
  return useApiFetchState({apiFn: () => categoryApi.create(name)});
}
