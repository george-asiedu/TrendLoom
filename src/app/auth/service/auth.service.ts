import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Signin, SigninResponse, Signup, SignupResponse } from '../../model/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authUrl = `${environment.baseUrl}/auth`;
  private http = inject(HttpClient);

  public signup(user: Signup) {
    this.http.post<SignupResponse>(`${this.authUrl}/signup`, user);
  }

  public signin(user: Signin) {
    this.http.post<SigninResponse>(`${this.authUrl}/signin`, user);
  }

  public verifyAccount(code: string) {
    this.http.post<SignupResponse>(`${this.authUrl}/verify-account`, code);
  }
}
