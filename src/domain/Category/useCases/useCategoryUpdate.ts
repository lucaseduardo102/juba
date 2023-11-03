import {useApiFetchState} from '@infra';
import {categoryApi} from '@domain';

export function useCategoryUpdate(id: number, name: string) {
  return useApiFetchState({apiFn: () => categoryApi.update(id, name)});
}
