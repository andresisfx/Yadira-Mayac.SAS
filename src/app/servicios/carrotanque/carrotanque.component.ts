import { Component } from '@angular/core';
import { CarrotanqueCarouselComponent } from './carrotanque-carousel/carrotanque-carousel.component';

@Component({
  selector: 'app-carrotanque',
  standalone: true,
  imports: [CarrotanqueCarouselComponent],
  templateUrl: './carrotanque.component.html',
  styleUrl: './carrotanque.component.css'
})
export class CarrotanqueComponent {

}
