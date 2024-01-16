import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Storage,ref,uploadBytes} from '@angular/fire/storage';
@Component({
  selector: 'app-certificados',
  standalone: true,
  imports: [FormsModule,],
  templateUrl: './certificados.component.html',
  styleUrl: './certificados.component.css'
})
export class CertificadosComponent {
  constructor(private storage:Storage){

  }
  uploadFile($event:any){
    const file = $event.target.files[0]
    const pdfRef= ref(this.storage,`certificados/${file.name}`)
    
    uploadBytes(pdfRef,file).then(x=>{
      console.log(x)
    }).catch(error=>console.log(error))
  }
}
