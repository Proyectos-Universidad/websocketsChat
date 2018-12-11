import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  MatTableModule
} from '@angular/material';


import { LoginComponent } from './pages/login/login.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserListContainerComponent } from './pages/user-list-container/user-list-container.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { UserFormComponent } from './components/user-form/user-form.component';
import { ChatComponent } from './components/chat/chat.component';

@NgModule({
  declarations: [
    LoginComponent,
    UserListComponent,
    UserListContainerComponent,
    UserFormComponent,
    ChatComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule
  ], 
  exports:[
    UserListContainerComponent,
    MatTableModule
  ]
})
export class UserModule { }
