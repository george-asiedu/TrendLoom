import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRoutes, authRoutes, images } from '../utils/constants';
import { NgOptimizedImage } from '@angular/common';
import { ThemeComponent } from '../theme/theme.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, NgOptimizedImage, ThemeComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  public cartRoute = appRoutes.cart;
  public profileRoute = appRoutes.profile;
  public aboutRoute = appRoutes.about;
  public contactRoute = appRoutes.contact;
  public productsRoute = appRoutes.products;
  public categoriesRoute = appRoutes.categories;
  public searchImage = images.search;
  public profileImage = images.user;
  public loginRoute = authRoutes.login;
  public hamburgerImage = images.hamburger;
  public closeImage = images.close;
  public cartImage = images.cart;
  public logoImage = images.darkLogo;

  public isMenuOpen = false;
}
