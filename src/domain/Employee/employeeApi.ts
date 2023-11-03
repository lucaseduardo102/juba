import {api} from '@services';

const PATH = '/employee';

async function create(profileId: string) {
  return await api.post(PATH, {profileId});
}

async function findByProfileId(profileId: string) {
  return await api.get(`${PATH}/profile/${profileId}`);
}

async function update(
  employeeId: string,
  profileId: string,
  workingHoursId: number,
) {
  return await api.patch(`${PATH}/${employeeId}`, {
    profileId,
    workingHoursId,
  });
}
export const employeeApi = {
  create,
  findByProfileId,
  update,
};
