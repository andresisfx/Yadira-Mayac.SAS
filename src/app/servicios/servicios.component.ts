import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { CamionComponent } from './camion/camion.component';
@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [RouterOutlet,RouterLink,CamionComponent],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {

}
