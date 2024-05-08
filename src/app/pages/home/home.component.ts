import { Component } from '@angular/core';
import { CarousalComponent } from '../../units/carousal/carousal.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarousalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
