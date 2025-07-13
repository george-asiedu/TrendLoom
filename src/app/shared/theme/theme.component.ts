import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-theme',
  standalone: true,
  imports: [],
  templateUrl: './theme.component.html',
  styleUrl: './theme.component.css',
})
export class ThemeComponent {
  public isDarkMode = signal<boolean>(this.getInitialTheme());

  public constructor() {
    effect(() => {
      const darkMode = this.isDarkMode();

      if (darkMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    });
  }

  private getInitialTheme(): boolean {
    const localTheme = localStorage.getItem('theme');
    return (
      localTheme === 'dark' ||
      (!localTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
    );
  }

  public toggleTheme(): void {
    this.isDarkMode.update(current => !current);
  }
}
