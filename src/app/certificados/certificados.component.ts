import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { listAll,getDownloadURL,ref, uploadBytes, getStorage, StorageReference, Storage} from '@angular/fire/storage';

@Component({
  selector: 'app-certificados',
  standalone: true,
  imports: [FormsModule,],
  templateUrl: './certificados.component.html',
  styleUrl: './certificados.component.css'
})
export class CertificadosComponent implements OnInit {
  private fileCounter = 1; // Contador de archivos
  constructor(private storage:Storage ){
    
  }
  pdfs:string[]=[]
  ngOnInit(): void {
    this.getPdf()
  }
  async uploadFile($event: any) {
    const file = $event.target.files[0];
      const folderPath = `${file.name}/`;
      const folderRef = ref(this.storage,folderPath);
      const folderExists = await listAll(folderRef)
       // Inicializa el servicio de almacenamiento
      console.log(folderExists)
      const fileId= this.generateUniqueId()
      const fileName = `${fileId}_${Date.now()}_${file.name}`;
       console.log(fileName)
      // Incrementa el contador para el siguiente archivo
      
      // Construye la referencia al archivo en el Storage de Firebase
      const pdfRef = ref(this.storage, `${file.name}/${fileName}`);
     try {
        // Sube el archivo al Storage
        const uploadResult = await uploadBytes(pdfRef, file);
        // Almacena el nuevo valor del contador en la base de datos
        // Obtiene la URL de descarga del archivo
        const downloadURL = await getDownloadURL(pdfRef);

        console.log('Archivo subido con éxito:', uploadResult);
        console.log('URL de descarga:', downloadURL);
      } catch (error) {
        console.error('Error al subir el archivo:', error);
      }
    
  }
  generateUniqueId(): string {
    const timestamp = new Date().getTime();
    const randomString = Math.random().toString(36).substring(2, 8);
    return `${timestamp}_${randomString}`;
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
