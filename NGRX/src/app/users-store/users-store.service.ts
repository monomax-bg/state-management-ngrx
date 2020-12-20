import {Injectable} from '@angular/core';
import {createFeatureSelector, createSelector, Store} from '@ngrx/store';
import {UsersStoreState} from './users-store.state';
import {GetUsersAction, SetSelectedUserIdAction} from './users-store.actions';
import {Observable} from 'rxjs';
import {User} from '../models/user.model';
import {HttpErrorResponse} from '@angular/common/http';
import {Photo} from '../models/photo.model';

@Injectable({
  providedIn: 'root'
})
export class UsersStoreService {

  usersState = createFeatureSelector<UsersStoreState>('users-store');

  constructor(private store: Store<UsersStoreState>) {
  }

  getUsers(): void {
    this.store.dispatch(new GetUsersAction());
  }

  setSelectedUserid(userId: number): void {
    this.store.dispatch(new SetSelectedUserIdAction(userId));
  }

  users$(): Observable<User[]> {
    return this.store.select(createSelector(this.usersState, (state: UsersStoreState) => state.users));
  }

  loading$(): Observable<boolean> {
    return this.store.select(createSelector(this.usersState, (state: UsersStoreState) => state.loading));
  }

  errorResponse$(): Observable<HttpErrorResponse> {
    return this.store.select(createSelector(this.usersState, (state: UsersStoreState) => state.errorResponse));
  }

  selectedUserId$(): Observable<number> {
    return this.store.select(createSelector(this.usersState, (state: UsersStoreState) => state.selectedUserId));
  }

  photo$(): Observable<Photo> {
    return this.store.select(createSelector(this.usersState, (state: UsersStoreState) => state.photo));
  }

}
