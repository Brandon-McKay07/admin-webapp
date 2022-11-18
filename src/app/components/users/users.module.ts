import { UserViewComponent } from './user-view/user-view.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UsersComponent } from './users.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    UsersComponent,
    UserCreateComponent,
    UserViewComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
