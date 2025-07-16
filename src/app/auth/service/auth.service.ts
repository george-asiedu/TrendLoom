import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Signin, SigninResponse, Signup, SignupResponse, VerifyAccountResponse } from '../../model/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authUrl = `${environment.baseUrl}/auth`;
  private http = inject(HttpClient);

  public signup(user: Signup): Observable<SignupResponse> {
    return this.http.post<SignupResponse>(`${this.authUrl}/signup`, user);
  }

  public signin(user: Signin): Observable<SigninResponse> {
    return this.http.post<SigninResponse>(`${this.authUrl}/signin`, user);
  }

  public verifyAccount(code: string): Observable<VerifyAccountResponse> {
    return this.http.post<VerifyAccountResponse>(`${this.authUrl}/verify-account`, { code });
  }
}
