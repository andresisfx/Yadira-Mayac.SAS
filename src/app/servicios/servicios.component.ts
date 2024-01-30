import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { CamionComponent } from './camion/camion.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [RouterOutlet,RouterLink,CamionComponent,NavBarComponent],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {

}
