import { Component } from '@angular/core';

@Component({
  selector: 'page-stay',
  templateUrl: 'stay.html'
})
export class StayPage {
	title = 'Paquetes:';

	 items: any = {
    
	    'Paquetes:': [
	      {
	        name: 'Minibar',
	        caption: 'Descripción del paquete',
	        icon: 'create',
	        src: 'assets/imgs/venkman.jpg'
	      },
	      {
	        name: 'Comida al llegar',
	        caption: 'Descripción del paquete',
	        icon: 'book',
	        src: 'assets/imgs/venkman.jpg'
	      },
	      {
	        name: 'Set limpia zapatos',
	        caption: 'Descripción del paquete',
	        icon: 'create',
	        src: 'assets/imgs/venkman.jpg'
	      },
	      {
	        name: 'Otro paquete',
	        caption: 'Descripción del paquete',
	        icon: 'book',
	        src: 'assets/imgs/venkman.jpg'
	      }
	    ],

	    'Dudas frecuentes:': [
	      {
	        name: 'Calefacción/AC',
	        caption: 'Descripción',
	        icon: 'ionic',
	        classavatar: 'class-avatar'
	      },
	      {
	        name: 'Sábanas y toallas',
	        caption: 'Descripción',
	        icon: 'logo-angular',
	        classavatar: 'class-avatar'
	      },
	      {
	        name: 'Televisión',
	        caption: 'Descripción',
	        icon: 'ionic',
	        classavatar: 'class-avatar'
	      },
	      {
	        name: 'Learn Angular',
	        caption: 'Descripción',
	        icon: 'logo-angular',
	        classavatar: 'class-avatar'
	      }
	    ]
  };

    getItems(type: any) {
    return this.items[type];
  }


  constructor() {

  }
}
