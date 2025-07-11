import { Component, OnInit } from '@angular/core';
import { useThemeSwitcher } from '../utils/theme.utils';
import { NgOptimizedImage } from '@angular/common';
import { images } from '../utils/constants';

@Component({
  selector: 'app-theme',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './theme.component.html',
  styleUrl: './theme.component.css'
})
export class ThemeComponent implements OnInit {
  private readonly storage = useThemeSwitcher('theme', 'light');
  public isDark: boolean = this.storage.value() === 'dark';
  public moonIcon = images.moon;
  public sunIcon = images.sun;
  public theme = this.isDark ? 'dark' : 'light';
  
  public ngOnInit(): void {
    this.isDark = this.storage.value() === 'dark';
  }

  public themeToggle(): void {
    const newTheme = this.isDark ? 'light' : 'dark';
    this.storage.value.set(newTheme);
    this.isDark = newTheme === 'dark';
    document.body.setAttribute('data-theme', newTheme);
  }
}
