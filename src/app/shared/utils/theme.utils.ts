import { DestroyRef, effect, inject, signal } from '@angular/core';

export const useThemeSwitcher = (key: string, initialValue: string) => {
  // Check for stored theme or system preference
  const getInitialTheme = (): string => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(key);
      if (stored) return stored;

      // Check system preference
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    }
    return initialValue;
  };

  const value = signal<string>(getInitialTheme());

  // Apply theme to document
  const applyTheme = (theme: string) => {
    document.body.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  };

  // Apply initial theme
  if (typeof window !== 'undefined') {
    applyTheme(value());
  }

  // Handle storage changes from other tabs
  function storageHandler(e: StorageEvent): void {
    if (e.key === key && e.newValue) {
      value.set(e.newValue);
      applyTheme(e.newValue);
    }
  }

  if (typeof window !== 'undefined') {
    window.addEventListener('storage', storageHandler, true);
  }

  // Save to localStorage when value changes
  effect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, value());
      applyTheme(value());
    }
  });

  // Cleanup
  inject(DestroyRef).onDestroy(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('storage', storageHandler);
    }
  });

  return {
    value,
    toggle: () => {
      const newTheme = value() === 'dark' ? 'light' : 'dark';
      value.set(newTheme);
    },
  };
};
