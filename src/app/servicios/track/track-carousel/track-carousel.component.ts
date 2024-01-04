import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-track-carousel',
  standalone: true,
  imports: [SlickCarouselModule],
  templateUrl: './track-carousel.component.html',
  styleUrl: './track-carousel.component.css'
})
export class TrackCarouselComponent {
  slides = [
    {img: "assets/images/mulaContainer.jpeg"},
    {img: "assets/images/mulaNegra.jpeg"},
    {img: "assets/images/mulaAzul.jpeg"},
   
  ];
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, 
    speed: 1000, // Velocidad de transición en milisegundos
    fade: true, // Activar transición de fundido (fade)
    cssEase: 'linear', // Función de ease para la transición
    pauseOnHover: false,
  };
}
