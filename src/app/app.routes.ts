import { Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { pageTitles } from './shared/utils/constants';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: pageTitles.home }
];
