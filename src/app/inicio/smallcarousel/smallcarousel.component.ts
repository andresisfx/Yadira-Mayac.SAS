import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';


@Component({
  selector: 'app-smallcarousel',
  standalone: true,
  imports: [SlickCarouselModule],
  templateUrl: './smallcarousel.component.html',
  styleUrl: './smallcarousel.component.css'
})
export class SmallcarouselComponent {
  slides = [
    {img: "assets/images/mulaContainer.jpeg"},
    {img: "assets/images/mulaNegra.jpeg"},
    {img: "assets/images/volquetaNaranja.jpeg"},
    {img: "assets/images/volquetaAzul.jpeg"},
    {img: "assets/images/volquetaRoja.jpeg"}
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
