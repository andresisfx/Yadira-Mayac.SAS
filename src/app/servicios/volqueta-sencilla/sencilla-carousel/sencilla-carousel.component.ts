import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-sencilla-carousel',
  standalone: true,
  imports: [SlickCarouselModule],
  templateUrl: './sencilla-carousel.component.html',
  styleUrl: './sencilla-carousel.component.css'
})
export class SencillaCarouselComponent {
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
