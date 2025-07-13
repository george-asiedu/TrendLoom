import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme',
  standalone: true,
  imports: [],
  templateUrl: './theme.component.html',
  styleUrl: './theme.component.css',
})
export class ThemeComponent implements OnInit {
  public isDarkMode = false;

  public ngOnInit(): void {
    const localTheme = localStorage.getItem('theme');
    this.isDarkMode =
      localTheme === 'dark' ||
      (!localTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
  }

  public toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;

    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }
}
