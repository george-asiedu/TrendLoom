import { HttpErrorResponse } from '@angular/common/http';
import { AuthState, Signin, Signup } from '../../model/auth';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { inject } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap } from 'rxjs';
import { mapResponse } from '@ngrx/operators';

const initialState: AuthState = {
  user: null,
  signupResponse: null,
  signinResponse: null,
  verificationResponse: null,
  isLoading: false,
  error: null,
};

export const authStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store, authService = inject(AuthService)) => ({
    signup: rxMethod<Signup>(
      pipe(
        tap(() => patchState(store, { isLoading: true, error: null })),
        switchMap((user: Signup) => {
          return authService.signup(user).pipe(
            mapResponse({
              next: response =>
                patchState(store, {
                  signupResponse: response,
                  user,
                  isLoading: false,
                }),
              error: (error: HttpErrorResponse) =>
                patchState(store, {
                  error,
                  isLoading: false,
                }),
            })
          );
        })
      )
    ),

    signin: rxMethod<Signin>(
      pipe(
        tap(() => patchState(store, { isLoading: true, error: null })),
        switchMap((user: Signin) => {
          return authService.signin(user).pipe(
            mapResponse({
              next: response =>
                patchState(store, {
                  signinResponse: response,
                  user,
                  isLoading: false,
                }),
              error: (error: HttpErrorResponse) =>
                patchState(store, {
                  error,
                  isLoading: false,
                }),
            })
          );
        })
      )
    ),

    verifyAccount: rxMethod<string>(
      pipe(
        tap(() => patchState(store, { isLoading: true, error: null })),
        switchMap((code: string) => {
          return authService.verifyAccount(code).pipe(
            mapResponse({
              next: response =>
                patchState(store, {
                  verificationResponse: response,
                  isLoading: false,
                }),
              error: (error: HttpErrorResponse) =>
                patchState(store, {
                  error,
                  isLoading: false,
                }),
            })
          );
        })
      )
    ),

    clearError: () => patchState(store, { error: null }),
    reset: () => patchState(store, initialState),
  }))
);
