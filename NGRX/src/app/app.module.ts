import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserTableComponent } from './pages/user-table/user-table.component';
import { PhotoComponent } from './pages/photo/photo.component';
import { usersStateReducer} from './users-store/users-store.reducer';
import { StoreModule} from '@ngrx/store';
import { EffectsModule} from '@ngrx/effects';
import { UsersStoreEffects} from './users-store/users-store.effects';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UserTableComponent,
    PhotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forFeature('users-store', usersStateReducer),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([UsersStoreEffects]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
