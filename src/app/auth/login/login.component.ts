import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { authRoutes } from '../../shared/utils/constants';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public forgotPasswordRoute = authRoutes.forgotPassword;
  public signupRoute = authRoutes.signup;
}
