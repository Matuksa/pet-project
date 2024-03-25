import { BookStatus } from '../enums/status.enum';
import { User } from './user.interface';

export interface Book {
  id: number;
  cover: string;
  name: string;
  genre: string;
  author: string;
  description: string;
  addDate: Date;
  userTookBook: User;
  status: BookStatus;
}
