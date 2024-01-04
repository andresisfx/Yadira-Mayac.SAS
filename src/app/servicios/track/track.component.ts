import { Component } from '@angular/core';
import { TrackCarouselComponent } from './track-carousel/track-carousel.component';

@Component({
  selector: 'app-track',
  standalone: true,
  imports: [TrackCarouselComponent],
  templateUrl: './track.component.html',
  styleUrl: './track.component.css'
})
export class TrackComponent {

}
