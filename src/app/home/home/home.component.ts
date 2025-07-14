import { Component } from '@angular/core';
import { DiscoverComponent } from '../discover/discover.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DiscoverComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
