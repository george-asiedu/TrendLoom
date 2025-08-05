import { HttpErrorResponse } from '@angular/common/http';

export interface Signup {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface Signin {
  email: string;
  password: string;
}

export interface SignupResponse {
  status: string;
  message: string;
  data: { token: string };
}

export interface VerifyAccountResponse {
  status: string;
  message: string;
}

export interface SigninResponse {
  status: string;
  message: string;
  data: {
    token: {
      accessToken: string;
      refreshToken: string;
    };
    user: {
      id: string;
      name: string;
      email: string;
      role: string;
      accountStatus: string;
    };
  };
}

export interface AuthState {
  user: Signup | Signin | null;
  signupResponse: SignupResponse | null;
  signinResponse: SigninResponse | null;
  verificationResponse: VerifyAccountResponse | null;
  isLoading: boolean;
  error: HttpErrorResponse | null;
}
