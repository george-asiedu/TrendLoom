import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { authRoutes } from '../../shared/utils/constants';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  public loginRoute = authRoutes.login;
}
