import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { appRoutes, images } from '../../shared/utils/constants';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent {
  public electronicsImage = images.ultra;
  public fitnessImage = images.fitness;
  public homeImage = images.home;
  public cannonImage = images.cannon;
  public furnitureImage = images.furniture;
  public backpackImage = images.backpack;
  public categoriesRoute = appRoutes.categories;
}
