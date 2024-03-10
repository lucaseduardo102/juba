function getProfilesByPermissionType() {
    return useFetch(
      permissionApi.getProfilesByPermission,
    );
  }
  function getUsersByPermissionType() {
    return useFetch(
      permissionApi.getUsersByPermission,
    );
  }
  
  export const permissionUseCases = {
    getProfilesByPermissionType,
    getUsersByPermissionType,
  };