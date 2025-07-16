import { computed, inject, Injectable, Signal } from '@angular/core';
import { AuthStore } from '../../auth/store/auth.store';
import { HttpErrorResponse } from '@angular/common/http';
import {
  Signup,
  Signin,
  SignupResponse,
  SigninResponse,
  VerifyAccountResponse,
} from '../../model/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthFacade {
  private readonly store = inject(AuthStore);

  // Selectors - Expose store state as signals
  public readonly user: Signal<Signup | Signin | null> = this.store.user;
  public readonly signupResponse: Signal<SignupResponse | null> = this.store.signupResponse;
  public readonly signinResponse: Signal<SigninResponse | null> = this.store.signinResponse;
  public readonly verificationResponse: Signal<VerifyAccountResponse | null> =
    this.store.verificationResponse;
  public readonly isLoading: Signal<boolean> = this.store.isLoading;
  public readonly error: Signal<HttpErrorResponse | null> = this.store.error;

  // Computed selectors for common UI states
  public readonly isSignedIn: Signal<boolean> = computed(() => !!this.store.signinResponse());

  public readonly isSignupComplete: Signal<boolean> = computed(() => !!this.store.signupResponse());

  public readonly isVerificationComplete: Signal<boolean> = computed(
    () => !!this.store.verificationResponse()
  );

  public readonly hasError: Signal<boolean> = computed(() => !!this.store.error());

  // Actions - Delegate to store methods
  public signup(user: Signup): void {
    this.store.signup(user);
  }

  public signin(user: Signin): void {
    this.store.signin(user);
  }

  public verifyAccount(code: string): void {
    this.store.verifyAccount(code);
  }

  public clearError(): void {
    this.store.clearError();
  }

  public reset(): void {
    this.store.reset();
  }

  // Additional facade methods for common business logic
  public signout(): void {
    // Clear all auth data
    this.reset();
    // Additional signout logic can be added here
    // e.g., navigate to login page, clear tokens, etc.
  }

  public isAuthenticated(): boolean {
    // Simple check for authentication state
    return !!this.signinResponse();
  }

  public getCurrentUser(): Signup | Signin | null {
    return this.user();
  }

  public getErrorMessage(): string | null {
    const error = this.error();
    return error ? error.message || 'An error occurred' : null;
  }

  // Helper methods for specific error handling
  public isSignupError(): boolean {
    const error = this.error();
    return !!error && this.isLoading() === false && !this.signupResponse();
  }

  public isSigninError(): boolean {
    const error = this.error();
    return !!error && this.isLoading() === false && !this.signinResponse();
  }

  public isVerificationError(): boolean {
    const error = this.error();
    return !!error && this.isLoading() === false && !this.verificationResponse();
  }

  // Retry methods
  public retryLastAction(): void {
    // This could be enhanced to remember the last action and retry it
    // For now, just clear the error to allow user to try again
    this.clearError();
  }
}
