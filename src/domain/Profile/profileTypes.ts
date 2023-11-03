export interface ProfileToCreateRequestDTO {
  name: string;
  cpf: string;
  statusProfile: boolean;
  userId: string;
}

export interface ProfileToPartiallyUpdateRequestDTO {
  id: string;
  name: string;
  cpf: string;
  statusProfile: boolean;
}

export interface ProfileToUpdateRequestDTO {
  profileId: string;
  name: string;
  cpf: string;
  statusProfile: boolean;
  userId: string;
}

export interface ProfileResponse {
  id: string;
  name: string;
  cpf: string;
  statusProfile: boolean;
}
