import { Component,HostListener, OnInit } from '@angular/core';
import { SmallcarouselComponent } from './smallcarousel/smallcarousel.component';
import { CarouselComponent } from './carousel/carousel.component';
import {NgClass} from '@angular/common';
import { RouterOutlet,RouterLink } from '@angular/router';
import { ModalService } from '../open-modal.service';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [SmallcarouselComponent,CarouselComponent,NgClass,RouterLink,ModalComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit {
  public showAboutCont = false;
  public showAboutCont2 = false;
  public showAboutCont3 = false;
  public showAboutCont4 = false;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const scrollPosition = window.scrollY;

    // Ajusta el valor de 300 según la posición de desplazamiento en la que deseas que aparezca el div
    this.showAboutCont = scrollPosition > 200;
    this.showAboutCont2 = scrollPosition > 800;
    this.showAboutCont3 = scrollPosition > 1300;
    this.showAboutCont4 = scrollPosition > 1900;
  }
  constructor(private modalService: ModalService) {}

  ngOnInit() {
    this.modalService.openModal();
  }

}
