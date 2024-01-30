import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Storage, ref, uploadBytes, listAll, getDownloadURL } from '@angular/fire/storage';
import { reference } from '@popperjs/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-certificados',
  standalone: true,
  imports: [FormsModule,NavBarComponent],
  templateUrl: './certificados.component.html',
  styleUrl: './certificados.component.css'
})
export class CertificadosComponent implements OnInit {
  selectedFiles: any;

  idUser: string='';
  selectedPdf: string ='';

  isLoading: boolean = false;

  redirectToPdf(pdfUrl: string): void {
    window.open(pdfUrl, '_blank');
  }
  constructor(private storage: Storage) {}

  pdfs: string[] = [];
  
  ngOnInit(): void {
    // this.getPdf();
  }
 
   getPdf() {
    this.isLoading = true;
    console.log(this.idUser);
    const certificadosRef = ref(this.storage, `${this.idUser.trim()}`);
    listAll(certificadosRef)
      .then(async certs => {
        this.pdfs = [];
  
        for (let cert of certs.items) {
          const url = await getDownloadURL(cert);
          this.pdfs.push(url);
        }
        console.log(this.pdfs);
      })
      .catch(error => console.log(error)).
      finally(() => {
        this.isLoading = false;
        this.idUser = '';
      });
  }

  extractFileName(url: string): string {
    //   /\/o\/([^?]+)/;   
    const regex = /%2F([^?]+)/; 
    const match = url.match(regex);
    return match ? match[1] : url;
  }
  
}