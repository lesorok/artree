import { ID } from '../types/id.type';
import { IBase } from './base.interface';

export interface IUserBoard extends IBase {
  id: ID;
  user: ID;
  post: ID;
}
