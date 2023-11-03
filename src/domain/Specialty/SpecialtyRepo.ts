import {Alert} from '@components';
import {api} from '@services';
import {SpecialtyToCreateRequestDTO} from './SpecialtyTypes';

const PATH = '/specialty';

export async function getAllSpecialties() {
  const response = await api.get(PATH);
  return response.data;
}

export async function createSpecialty({
  categoryId,
  specialtyName,
}: SpecialtyToCreateRequestDTO) {
  const response = await api.post(PATH, {
    name: specialtyName,
    categoryId
  });
  Alert({
    type: 'alert',
    message: `Especialidade ${response.data.name} criada com sucesso.`,
  });
}
