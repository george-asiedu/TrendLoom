import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgToastComponent, TOAST_POSITIONS, ToastPosition } from 'ng-angular-popup';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgToastComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  public toastPosition: ToastPosition = TOAST_POSITIONS.TOP_RIGHT;
}
