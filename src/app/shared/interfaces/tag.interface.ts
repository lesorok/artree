import { ID } from '../types/id.type';
import { IBase } from './base.interface';

export interface ITag extends IBase {
    id: ID;
    name: string;
}