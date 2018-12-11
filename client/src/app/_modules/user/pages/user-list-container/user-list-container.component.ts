import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { UserService } from '../../../../_services/user.service';
import { User } from '../../../../_models/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-list-container',
  templateUrl: './user-list-container.component.html',
  styleUrls: ['./user-list-container.component.scss']
})
export class UserListContainerComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  users : User[];

  ngOnInit() {
    this.activatedRoute.data.pipe(first()).subscribe((data: { users: User[]}) => {
      this.users = data.users;
    });
  }

}
