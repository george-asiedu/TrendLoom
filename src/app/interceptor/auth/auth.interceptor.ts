import { HttpInterceptorFn } from '@angular/common/http';
import { AuthFacade } from '../../shared/facade/auth/auth.facade';
import { inject } from '@angular/core';
import { environment } from '../../../environments/environment';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authFacade = inject(AuthFacade);
  const authUrl = `${environment.baseUrl}/auth`;
  const authToken = authFacade.signinResponse()?.data.token.accessToken;

  if (authToken && !req.url.includes(authUrl)) {
    const authReq = req.clone({
      setHeaders: {
        'Authorization': `Bearer ${authToken}`
      }
    });
    return next(authReq);
  }
  return next(req);
};
