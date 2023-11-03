import {ProfileResponse} from '@domain';
import {WorkingHoursResponse} from '../WorkingHours';

export interface EmployeeResponse {
  id: string;
  profile: ProfileResponse;
  workingHours: WorkingHoursResponse;
  services: [] | [{id: string; name: string; timeDuration?: string}];
}
