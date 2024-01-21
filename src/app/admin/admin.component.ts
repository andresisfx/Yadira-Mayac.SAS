
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Storage, ref, uploadBytes, listAll, getDownloadURL } from '@angular/fire/storage';
import { reference } from '@popperjs/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  constructor(private storage: Storage,private userService:UserService, private router:Router) {}
  pdfs: string[] = [];
  loading= false;
  uploadFiles($event: any) {
    const files: FileList = $event.target.files;
    if (files.length === 0) {
      return; 
    }
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      this.loading = true
      
      this.uploadFile(file);
    }
  } 
  
  
  uploadFile = (file: File) => {
    console.log("loading ...", this.loading)
    const folderName = file.name.replace(/\.[^/.]+$/, ""); 
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().replace(/[-T:.Z]/g, "");
    const fileNameWithDate = `${formattedDate}_${file.name}`;
    const pdfRef = ref(this.storage, `${folderName}/${fileNameWithDate}`);

    //veo si carpeta existe
    const folderRef = ref(this.storage, folderName);
    listAll(folderRef)
      .then(() => {
        this.uploadFileInsideFolder(pdfRef, file);
      })
      .catch(() => {
        // nuva carpeta si no hay 
        const createFolderRef = ref(this.storage, folderName);
        uploadBytes(createFolderRef, new Blob()).then(() => {
          this.uploadFileInsideFolder(pdfRef, file);
        }).catch(error =>{
          this.loading=false;
           console.log(error)
        });
      });
  }

  uploadFileInsideFolder(pdfRef: any, file: File) {
    uploadBytes(pdfRef, file).then(x => {
      this.loading=false;
      console.log(x);
      console.log("loading ...", this.loading)
    }).catch(error => {
      this.loading=false;
      console.log(error)});
  }
  
  logOutClick(){
    this.userService.logOut()
    .then(()=>{
      this.router.navigate(['/'])
    })
  }
}
