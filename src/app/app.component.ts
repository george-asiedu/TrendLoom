import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgToastComponent, TOAST_POSITIONS, ToastPosition } from 'ng-angular-popup';
import { HeaderComponent } from './shared/header/header.component';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgToastComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  public toastPosition: ToastPosition = TOAST_POSITIONS.TOP_RIGHT;

  public ngOnInit(): void {
    initFlowbite();
  }
}
