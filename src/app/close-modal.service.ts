import { Injectable } from '@angular/core';
import {Dialog} from "@angular/cdk/dialog";

@Injectable({
  providedIn: 'root'
})
export class CloseModalService {

  constructor(private dialogRef:Dialog) { }

  closeModal() {
    this.dialogRef.closeAll()
 }
}
