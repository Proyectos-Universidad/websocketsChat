import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { User } from '../../../../_models/user';
import { UserService } from '../../../../_services/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserListResolverService implements Resolve<User[]> {

  constructor(private userService: UserService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User[]> {
    return this.userService.getAll();
  }
  
}
