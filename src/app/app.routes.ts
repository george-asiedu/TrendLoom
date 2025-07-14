import { Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { authRoutes, pageTitles } from './shared/utils/constants';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: pageTitles.home },
  {
    path: authRoutes.login,
    loadComponent: () => import('./auth/login/login.component').then(c => c.LoginComponent),
    title: pageTitles.login,
  },
];
