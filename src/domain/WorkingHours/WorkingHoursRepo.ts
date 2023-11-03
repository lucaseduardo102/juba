import {Alert} from '@components';
import {api} from '@services';
import {WorkingHoursRequestDTO} from './workingHoursTypes';
import {isAxiosError} from 'axios';

const PATH = '/working-hours';

export async function getAllWorkingHours() {
  try {
    const response = await api.get(PATH);
    return response.data;
  } catch (error) {
    Alert();
  }
}

export async function createNewWorkingHour(
  workingHour: WorkingHoursRequestDTO,
) {
  try {
    await api.post(PATH, workingHour);
    Alert({message: 'Novo horário criado com sucesso.'});
  } catch (error) {
    if (isAxiosError(error) && error.response?.status === 401) {
      Alert({message: 'Horários já cadastrados.'});
    }
  }
}
