import { Component } from '@angular/core';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

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
