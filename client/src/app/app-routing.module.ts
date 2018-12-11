import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListContainerComponent } from './_modules/user/pages/user-list-container/user-list-container.component';
import { UserListResolverService } from './_modules/user/pages/user-list-container/user-list-resolver.service';
import { LoginComponent } from './_modules/user/pages/login/login.component';
import { UserFormComponent } from './_modules/user/components/user-form/user-form.component';
import { routes } from './constants';
import { ChatComponent } from './_modules/user/components/chat/chat.component';
const routerRoutes: Routes = [
  {
    path: '',
    component: UserListContainerComponent, 
    resolve: {users: UserListResolverService}
  }, 
  {
    path: routes.login, 
    component: LoginComponent
  }, 
  {
    path: routes.register, 
    component: UserFormComponent
  },
  {
    path: routes.chat, 
    component: ChatComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routerRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
