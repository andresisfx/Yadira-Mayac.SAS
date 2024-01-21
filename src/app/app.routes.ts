import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { CertificadosComponent } from './certificados/certificados.component';
import { CamionComponent } from './servicios/camion/camion.component';
import { Component } from '@angular/core';
import { TallerComponent } from './servicios/taller/taller.component';
import { TrackComponent } from './servicios/track/track.component';
import { VolquetaDobleComponent } from './servicios/volqueta-doble/volqueta-doble.component';
import { VolquetaSencillaComponent } from './servicios/volqueta-sencilla/volqueta-sencilla.component';
import { CarrotanqueComponent } from './servicios/carrotanque/carrotanque.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import {canActivate,redirectUnauthorizedTo} from '@angular/fire/auth-guard'

export const routes: Routes = [
    {
        path:"",
        component:InicioComponent
      },
      {
        path:"servicios",
        component:ServiciosComponent ,children:[
        {path:'camion',component: CamionComponent},
        {path:'taller',component: TallerComponent},
        {path:'track',component: TrackComponent},
        {path:'volquetadoble',component: VolquetaDobleComponent},
        {path:'volquetasencilla',component: VolquetaSencillaComponent},
        {path:'carrotanque',component:CarrotanqueComponent},
      ]},
      {
        path:"empresa",
        component:EmpresaComponent
    
      },
      {
        path:"certificados",
        component:CertificadosComponent
      },
      {
        path:'admin',
        component:AdminComponent, ...canActivate(()=>redirectUnauthorizedTo(['/login']))
      },
      {
        path:'login',
        component:LoginComponent
      }
];
