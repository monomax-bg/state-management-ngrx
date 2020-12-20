import { Action } from '@ngrx/store';
import { User } from '../models/user.model';
import { HttpErrorResponse } from '@angular/common/http';
import {Photo} from '../models/photo.model';

export enum UsersStoreActionTypes {
  GetUsers = '[Usres Store] Get Users',
  GetUsersSuccess = '[Usres Store] Get Users Success',
  GetUsersFail = '[Usres Store] Get Users Fail',
  SetSelectedUserId = '[Usres Store] Set Selected User Id',
  GetPhotoSuccess = '[Usres Store] Get Photo Success',
  GetPhotoFail = '[Usres Store] Get Photo Fail',
}

export class GetUsersAction implements Action {
  readonly type = UsersStoreActionTypes.GetUsers;
  constructor() {}
}

export class GetUsersSuccessAction implements Action {
  readonly type = UsersStoreActionTypes.GetUsersSuccess;
  constructor(public paiload: User[]) {}
}

export class GetUsersFailAction implements Action {
  readonly type = UsersStoreActionTypes.GetUsersFail;
  constructor(public paiload: HttpErrorResponse) {}
}

export class SetSelectedUserIdAction implements Action {
  readonly type = UsersStoreActionTypes.SetSelectedUserId;
  constructor(public paiload: number) {}
}

export class GetPhotoSuccessAction implements Action {
  readonly type = UsersStoreActionTypes.GetPhotoSuccess;
  constructor(public paiload: Photo) {}
}

export class GetPhotoFailAction implements Action {
  readonly type = UsersStoreActionTypes.GetPhotoFail;
  constructor(public paiload: HttpErrorResponse) {}
}

export type UsersStoreActions =
  GetUsersAction |
  GetUsersSuccessAction |
  GetUsersFailAction |
  SetSelectedUserIdAction |
  GetPhotoSuccessAction |
  GetPhotoFailAction;
