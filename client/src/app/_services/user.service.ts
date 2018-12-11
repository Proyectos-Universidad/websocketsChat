import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models/user';
import { base_api_url, api_routes, } from '../constants';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll(): Observable<User[]>{
        return this.http.get<User[]>(base_api_url + api_routes.users_base);
    }

    create(user: User):Observable<User> {
        return this.http.post<User>(base_api_url + api_routes.users_register, user);
    }

    existsByUsername(username: String):Observable<Boolean> {
        return this.http.get<Boolean>(base_api_url + api_routes.users_exists_by_username + username);
    }
}