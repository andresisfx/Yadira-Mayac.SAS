import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { CertificadosComponent } from './certificados/certificados.component';

export const routes: Routes = [
    {
        path:"",
        component:InicioComponent
      },
      {
        path:"servicios",
        component:ServiciosComponent
      },
      {
        path:"empresa",
        component:EmpresaComponent
    
      },
      {
        path:"certificados",
        component:CertificadosComponent
      }
];
