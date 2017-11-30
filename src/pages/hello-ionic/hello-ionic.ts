import { Component } from '@angular/core';

import { ReservaPage } from '../reserva/reserva';
import { ViajePage } from '../viaje/viaje';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {

	tabTitle = 'nombre';
                
  tab1Root = ReservaPage;
  tab2Root = ViajePage;
  tab3Root = ProfilePage;


  constructor() {

  }
}
