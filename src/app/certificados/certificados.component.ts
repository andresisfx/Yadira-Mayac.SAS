import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Storage,ref,uploadBytes,listAll,getDownloadURL} from '@angular/fire/storage';
@Component({
  selector: 'app-certificados',
  standalone: true,
  imports: [FormsModule,],
  templateUrl: './certificados.component.html',
  styleUrl: './certificados.component.css'
})
export class CertificadosComponent implements OnInit {
  constructor(private storage:Storage){

  }
  pdfs:string[]=[]
  ngOnInit(): void {
    this.getPdf()
  }
  uploadFile($event:any){
    const file = $event.target.files[0]
    const pdfRef= ref(this.storage,`certificados/${file.name}`)

    uploadBytes(pdfRef,file).then(x=>{
      console.log(x)
    }).catch(error=>console.log(error))
  }
  getPdf(){
    const certificadosRef= ref(this.storage,`certificados`);
    listAll(certificadosRef).then(async certs=>{
      for(let cert of certs.items ){
        this.pdfs=[];
        const url = await getDownloadURL(cert);
        this.pdfs.push(url);
        console.log(this.pdfs)
        
      }
    }).catch(error=>console.log(error)) 
  }
}
