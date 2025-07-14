import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { authRoutes, images } from '../../shared/utils/constants';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  public loginRoute = authRoutes.login;
  public showPassword = signal<boolean>(false);
  public eyeOpen = images.eyeOpen;
  public eyeClose = images.eyeClose;

  public toggleShowPassword(): void {
    this.showPassword.update(value => !value);
  }

  public onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.toggleShowPassword();
    }
  }
}
