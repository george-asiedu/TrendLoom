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

export interface VerifyAccount {
  code: string;
}

export interface SignupResponse {
  status: string;
  message: string;
  data: {
    user: {
      id: string;
      email: string;
      name: string;
    };
    token: string;
  };
}

export interface VerifyAccountResponse {
  status: string;
  message: string;
  data: {
    user: {
      id: string;
      email: string;
      name: string;
      isEmailVerified: boolean;
    };
  };
}

export interface SigninResponse {
  status: string;
  message: string;
  data: {
    user: {
      id: string;
      email: string;
      name: string;
      role: string;
      isEmailVerified: boolean;
    };
    accessToken: string;
    refreshToken: string;
  };
}
