import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { CamionCarouselComponent } from './camion-carousel/camion-carousel.component';

@Component({
  selector: 'app-camion',
  standalone: true,
  imports: [RouterOutlet,CamionCarouselComponent],
  templateUrl: './camion.component.html',
  styleUrl: './camion.component.css'
})
export class CamionComponent {

}
