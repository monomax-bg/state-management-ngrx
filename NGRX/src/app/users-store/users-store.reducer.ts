import { UsersStoreState } from './users-store.state';
import { UsersStoreActions, UsersStoreActionTypes } from './users-store.actions';

export function usersStateReducer(state: UsersStoreState, action: UsersStoreActions): UsersStoreState {

  switch (action.type) {

    case UsersStoreActionTypes.GetUsers:
      return {
        ...state, loading: true
      };

    case UsersStoreActionTypes.GetUsersSuccess:
      return {
        ...state, loading: false, users: action.paiload, selectedUserId: action.paiload[0].id
      };

    case UsersStoreActionTypes.GetUsersFail:
      return {
        ...state, loading: false, errorResponse: action.paiload
      };

    case UsersStoreActionTypes.SetSelectedUserId:
      return {
        ...state, selectedUserId: action.paiload
      };

    case UsersStoreActionTypes.GetPhotoSuccess:
      return {
        ...state, loading: false, photo: action.paiload
      };

    case UsersStoreActionTypes.GetPhotoFail:
      return {
        ...state, loading: false, errorResponse: action.paiload
      };

    default:
      return state;
  }
}
