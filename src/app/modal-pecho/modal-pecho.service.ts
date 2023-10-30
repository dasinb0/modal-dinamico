import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ItemDetails } from '../shared/item-details';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  isModalOpen: EventEmitter<boolean> = new EventEmitter<boolean>(); 
  item!: ItemDetails; 

  constructor(public http: HttpClient) {} 

  // Call the API
  getItemDetails(id: any): Observable<ItemDetails> {
    return this.http.get<ItemDetails>(`https://pokeapi.co/api/v2/pokemon/charizard`);
  }

  getPikachuDetails(): Observable<ItemDetails> {
    return this.http.get<ItemDetails>('https://pokeapi.co/api/v2/pokemon/pikachu');
  }
  

  open(id: any) {
    this.getItemDetails(id).subscribe((data: ItemDetails) => {
      this.item = data;
      console.log('Datos del modal:', data); // Agrega este console.log
      this.isModalOpen.emit(true); 
      console.log('Estado del modal:', this.isModalOpen); // Agrega este console.log
    });
  }
}

