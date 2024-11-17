import { Component } from '@angular/core';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent {
  item = {
    nombre: '',
    descripcion: '',
    precio: null,
    categoria: '',
    estado: ''
  };

  constructor(private itemService: ItemService) {}

  saveItem(): void {
    this.itemService.createItem(this.item).subscribe(() => {
      alert('Item creado con éxito');
    });
  }
}
