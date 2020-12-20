import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from '../../models/photo.model';
import { UsersStoreService } from '../../users-store/users-store.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  photo$: Observable<Photo>;
  errorResponse$: Observable<HttpErrorResponse>;
  loading$: Observable<boolean>;

  constructor(private usersStoreService: UsersStoreService) {
  }

  ngOnInit(): void {
    this.photo$ = this.usersStoreService.photo$();
    this.errorResponse$ = this.usersStoreService.errorResponse$();
    this.loading$ = this.usersStoreService.loading$();
  }

}
