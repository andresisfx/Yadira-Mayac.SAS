import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';


@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [SlickCarouselModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  slides = [
    {img: "assets/images/mulaContainer.jpeg"},
    {img: "assets/images/mulaNegra.jpeg"},
    {img: "assets/images/mulaAzul.jpeg"},
    // {img: "assets/images/volquetaNaranja.jpeg"},
    // {img: "assets/images/volquetaAzul.jpeg"},
    // {img: "assets/images/volquetaRoja.jpeg"}
  ];
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, 
    speed: 1000, // Velocidad de transición en milisegundos
    fade: true,
  cssEase: 'ease-in-out',// Función de ease para la transición
    pauseOnHover: false, 
  };
}
