import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { switchMap, catchError } from 'rxjs/operators';
import {
  GetPhotoFailAction,
  GetPhotoSuccessAction,
  GetUsersAction,
  GetUsersFailAction,
  GetUsersSuccessAction,
  SetSelectedUserIdAction,
  UsersStoreActionTypes
} from './users-store.actions';

@Injectable()
export class UsersStoreEffects {

  usersUrl = 'https://jsonplaceholder.typicode.com/users';
  photoUrl = 'https://jsonplaceholder.typicode.com/photos/';

  constructor(private httpClient: HttpClient, private actions$: Actions) {
  }

  @Effect()
  getUsers$: Observable<Action> = this.actions$.pipe(
    ofType<GetUsersAction>(UsersStoreActionTypes.GetUsers),
    switchMap((action: GetUsersAction) => {
      return this.httpClient.get(this.usersUrl).pipe (
        switchMap((result: any[]) => {
          return of( new GetUsersSuccessAction(result));
        }),
        catchError( (e) => {
          return of(new GetUsersFailAction(e));
        })
      );
    })
  );

  @Effect()
  getPhoto$: Observable<Action> = this.actions$.pipe(
    ofType<SetSelectedUserIdAction>(UsersStoreActionTypes.SetSelectedUserId),
    switchMap((action: SetSelectedUserIdAction) => {
      return this.httpClient.get(this.photoUrl + action.paiload).pipe (
        switchMap((result: any) => {
          return of( new GetPhotoSuccessAction(result));
        }),
        catchError( (e) => {
          return of(new GetPhotoFailAction(e));
        })
      );
    })
  );

}
