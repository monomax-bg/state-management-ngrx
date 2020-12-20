import { User } from '../models/user.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Photo } from '../models/photo.model';

export interface UsersStoreState {
  users: User[];
  errorResponse: HttpErrorResponse;
  loading: boolean;
  selectedUserId: number;
  photo: Photo;
}

export const usersStoreState: UsersStoreState = {
  users: [],
  errorResponse: null,
  loading: false,
  selectedUserId: 0,
  photo: null
};
