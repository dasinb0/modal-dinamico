import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ModalService } from './modal-pecho.service';
import { ItemDetails } from '../shared/item-details';

@Component({
  selector: 'app-modal',
  templateUrl: './modal-pecho.component.html',
  styleUrls: ['./modal-pecho.component.css']
})
export class ModalComponent implements OnInit {
  item!: ItemDetails;
  pikachuItem!: ItemDetails;
  @Output() closeModal = new EventEmitter();
  isModalOpen = false;

  constructor(public modalService: ModalService) {}

  ngOnInit() {
    // Suscríbete a las solicitudes para obtener los datos de Charizard y Pikachu
    this.modalService.getItemDetails('charizard').subscribe((data: ItemDetails) => {
      this.item = data;
    });

    this.modalService.getPikachuDetails().subscribe((data: ItemDetails) => {
      this.pikachuItem = data;
    });
  }

  close() {
    this.isModalOpen = false;
    this.closeModal.emit();
  }
}


