import { useFetchApi } from "../../../hooks/useFetchApi";
import { profileApi } from "../profileApi";

export function useProfileGetListOfUserAndPermission() {
  const state = useFetchApi({
    apiFn: () => profileApi.getListOfUserAndPermission(),
  });

  return {
    ...state,
    refresh: state.fetchData,
  };
}
