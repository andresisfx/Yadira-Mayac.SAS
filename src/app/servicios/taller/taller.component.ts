import { Component } from '@angular/core';
import { TallerCarouselComponent } from './taller-carousel/taller-carousel.component';

@Component({
  selector: 'app-taller',
  standalone: true,
  imports: [TallerCarouselComponent],
  templateUrl: './taller.component.html',
  styleUrl: './taller.component.css'
})
export class TallerComponent {

}
