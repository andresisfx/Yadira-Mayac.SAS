import { Injectable } from '@angular/core';
import {Dialog} from "@angular/cdk/dialog";
import {DialogRef} from "@angular/cdk/dialog";
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ModalComponent } from './inicio/modal/modal.component';
@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modalOpened = false;
  private dialogRef: any;

  constructor(private dialog: Dialog, private overlay: Overlay) { }

  openModal() {
    if (!this.modalOpened) {
      console.log('Abrir modal');
      this.dialogRef = this.dialog.open(ModalComponent, {
        minWidth: '250px',
        maxWidth: '50%',
        disableClose: true // Evita que el modal se cierre al hacer clic fuera de él
      });

      this.modalOpened = true;
    }
  }

  closeModal() {
    if (this.modalOpened) {
      console.log('Cerrar modal');
      this.dialogRef.close();
      this.modalOpened = false;
    }
  }
 
}
