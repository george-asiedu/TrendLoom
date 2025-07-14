import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { images } from '../../shared/utils/constants';

@Component({
  selector: 'app-discover',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './discover.component.html',
  styleUrl: './discover.component.css'
})
export class DiscoverComponent {
  public heroImage = images.hero;
  public fitnessImage = images.fitness;
  public jblImage = images.jbl;
}
