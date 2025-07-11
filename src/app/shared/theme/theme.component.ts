import { Component, computed } from '@angular/core';
import { useThemeSwitcher } from '../utils/theme.utils';
import { NgOptimizedImage } from '@angular/common';
import { images } from '../utils/constants';

@Component({
  selector: 'app-theme',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './theme.component.html',
  styleUrl: './theme.component.css',
})
export class ThemeComponent {
  private readonly themeStorage = useThemeSwitcher('theme', 'light');

  public isDark = computed(() => this.themeStorage.value() === 'dark');
  public currentTheme = computed(() => this.themeStorage.value());

  public moonIcon = images.moon;
  public sunIcon = images.sun;

  public themeToggle(): void {
    this.themeStorage.toggle();
  }
}
