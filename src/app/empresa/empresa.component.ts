import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-empresa',
  standalone: true,
  imports: [RouterLink,NavBarComponent],
  templateUrl: './empresa.component.html',
  styleUrl: './empresa.component.css'
})
export class EmpresaComponent {

}
