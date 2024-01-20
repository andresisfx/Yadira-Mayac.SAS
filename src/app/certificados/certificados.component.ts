import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Storage, ref, uploadBytes, listAll, getDownloadURL } from '@angular/fire/storage';
import { reference } from '@popperjs/core';

@Component({
  selector: 'app-certificados',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './certificados.component.html',
  styleUrl: './certificados.component.css'
})
export class CertificadosComponent implements OnInit {
  selectedFiles: any;

  idUser: string='';
  selectedPdf: string ='';

  redirectToPdf(pdfUrl: string): void {
    window.open(pdfUrl, '_blank');
  }
  constructor(private storage: Storage) {}

  pdfs: string[] = [];
  
  ngOnInit(): void {
    // this.getPdf();
  }
 
  getPdf() {
    console.log(this.idUser)
    const certificadosRef = ref(this.storage, `${this.idUser.trim()}`);
    listAll(certificadosRef).then(async certs => {
      
      for (let cert of certs.items) {
       
        const url = await getDownloadURL(cert);
        this.pdfs.push(url);
       
      }
      console.log(this.pdfs)
    }).catch(error => console.log(error));
  }
}