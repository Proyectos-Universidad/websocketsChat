import { AbstractControl } from '@angular/forms';
import { UserService } from '../_services/user.service';
import { debounceTime, map } from 'rxjs/operators';

export class UsernameValidator {
  static username(userService: UserService) {
    return (control: AbstractControl) => {
      const username = control.value.toLowerCase();
      return userService.existsByUsername(username).pipe(
        map(r => r ? {nope: false} : null)
      );
    }
  }
}