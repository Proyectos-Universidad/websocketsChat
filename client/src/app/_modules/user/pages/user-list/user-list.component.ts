import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../../_models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = ['username', 'fullName'];
  
  @Input()
  users: User[];

  ngOnInit() {
  }

}
