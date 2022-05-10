import { ID } from '../types/id.type';
import { IBase } from './base.interface';

export interface IPost extends IBase{
    id: ID;
    title: string;
    content: string;
    photo: File;
    author: ID;
    category: ID;
    tag: ID;
    date: Date;
    like_counters: number;
    comment_counters: number;
}