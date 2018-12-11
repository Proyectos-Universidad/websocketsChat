import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsernameValidator } from '../../../../_validators/username.validator';
import { UserService } from '../../../../_services/user.service';
import { Observable, BehaviorSubject, fromEvent } from 'rxjs';
import { map, finalize } from 'rxjs/operators';
import { MustMatch } from '../../../../_validators/must-match.validator';
import { Router } from '@angular/router';
import { routes } from '../../../../constants';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  error = '';

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      username:['',
        [Validators.required],
        [UsernameValidator.username(this.userService)]
      ] ,
      firstName:['', [Validators.required]] ,
      lastName:['', [Validators.required]] ,
      password:['', [Validators.required]] , 
      passwordConfirmation:['', [Validators.required]] 
    }, {
      validator: MustMatch('password', 'passwordConfirmation')
    });
  }

  get f() { return this.registerForm.controls; }

  async submitHandler() {
    this.loading = true;

    const formValue = this.registerForm.value;

    this.userService.create(formValue).pipe(
      finalize(() => this.loading = false)
    ).subscribe(u => this.router.navigate([routes.login]));
  }


}