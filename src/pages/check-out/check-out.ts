import { Component } from '@angular/core';

@Component({
  selector: 'check-out-ready',
  templateUrl: 'check-out.html'
})
export class CheckOutPage {

	items = [
    'Revisa el apartamento',
    'Apaga la calefacción',
    'Deja la llave dentro del apartamento',
    'The Legend of Zelda'
  ];


getItems(type: any) {
    return this.items[type];
  }

  constructor() {

  }
}
