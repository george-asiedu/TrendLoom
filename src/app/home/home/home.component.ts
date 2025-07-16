import { Component } from '@angular/core';
import { DiscoverComponent } from '../discover/discover.component';
import { CategoryComponent } from '../category/category.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DiscoverComponent, CategoryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
