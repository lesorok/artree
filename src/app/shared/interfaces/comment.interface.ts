import { ID } from '../types/id.type';
import { IBase } from './base.interface';

export interface IComment extends IBase{
    id: ID;
    post: ID;
    author: ID;
    content: string;
    date: Date;
    like_counters: number; 
    
}