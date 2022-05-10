import { ID } from '../types/id.type';
import { IBase } from './base.interface';

export interface ICategory extends IBase {
    id: ID;
    name: string;
    logo: File;
    description: string;
}
