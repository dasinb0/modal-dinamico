import { Component } from '@angular/core';
import { ModalService } from './modal-pecho/modal-pecho.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'modal-pecho';
  isModalOpen = false; 

  constructor(private modalService: ModalService) {
    // Suscríbete al evento isModalOpen para controlar la visibilidad del modal
    modalService.isModalOpen.subscribe((isOpen: boolean) => {
      console.log('Modal abierto:', isOpen); // Agrega este console.log
      this.isModalOpen = isOpen;
    });
  }

  openModal() {
    console.log('Abriendo modal...'); // Agrega este console.log
    this.modalService.open('charizard');
    this.isModalOpen = true; // Asegúrate de que isModalOpen se establezca en true al abrir el modal
  }

  closeModal() {
    console.log('Cerrando modal...'); // Agrega este console.log
    this.isModalOpen = false; // Asegúrate de que isModalOpen se establezca en false al cerrar el modal
  }
}

