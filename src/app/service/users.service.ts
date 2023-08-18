import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { user } from '../interfaces/user';
import { Observable } from 'rxjs';

interface access {
  Access: boolean;
  Message: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  BASE_URL = 'http://localhost:3000';
  
  userResponse: any;
  constructor(private http: HttpClient) { }

  login(User: user): Observable<access>{
    return this.http.post<access>(`${this.BASE_URL}/users/login`, User)
  }

  adminAccess(User: user): Observable<access>{
    return this.http.post<access>(`${this.BASE_URL}/users/admin/access`, User)
  }
}
