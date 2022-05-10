import { UserRole } from '../enums/user-role.enum';
import { UserStatuses } from '../enums/user-status.enum';
import { IBase } from './base.interface';
import { ID } from '../types/id.type';

export interface IUser extends IBase {
  id: ID;
  username: string;
  password: string | number;
  email: string;
  name: string;
  surname: string;
  avatar: File;
  background: File;
  date_birth: Date;
  role: UserRole;
  status: UserStatuses;
}

