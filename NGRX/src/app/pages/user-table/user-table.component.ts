import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from '../../models/user.model';
import { UsersStoreService } from '../../users-store/users-store.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserTableComponent implements OnInit {

  users$: Observable<User[]>;
  errorResponse$: Observable<HttpErrorResponse>;
  loading$: Observable<boolean>;
  selectedUserId$: Observable<number>;

  constructor(private usersStoreService: UsersStoreService) { }

  ngOnInit(): void {
    this.users$ = this.usersStoreService.users$();
    this.errorResponse$ = this.usersStoreService.errorResponse$();
    this.loading$ = this.usersStoreService.loading$();
    this.selectedUserId$ = this.usersStoreService.selectedUserId$();
    this.usersStoreService.getUsers();
  }

  userClick(userId: number): void {
    this.usersStoreService.setSelectedUserid(userId);
  }


}
