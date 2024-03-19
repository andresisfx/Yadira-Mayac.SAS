import { Component,OnInit } from '@angular/core';
import { ModalService } from '../../open-modal.service'; 
import { CloseModalService } from '../../close-modal.service';
@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  constructor(private modalService: CloseModalService) {}

  
  close(){
    this.modalService.closeModal()
  }
}
