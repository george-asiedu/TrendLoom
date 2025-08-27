import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { appRoutes, images } from '../utils/constants';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  public logoImage = images.logo;
  public profileRoute = appRoutes.profile;
  public aboutRoute = appRoutes.about;
  public contactRoute = appRoutes.contact;
  public productsRoute = appRoutes.products;
  public categoriesRoute = appRoutes.categories;
  public blogRoute = appRoutes.blog;
}
