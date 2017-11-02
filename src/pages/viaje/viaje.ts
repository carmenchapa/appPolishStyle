import { Component } from '@angular/core';
// import { ReservaPage } from '../reserva/reserva';
import { GetReadyPage } from '../get-ready/get-ready';
import { CheckInPage } from '../check-in/check-in';
import { StayPage } from '../stay/stay';
import { CheckOutPage } from '../check-out/check-out';


@Component({
  selector: 'viaje',
  templateUrl: 'viaje.html'
})
export class ViajePage {

  tabTitle = 'nombre';

  tab1Root = GetReadyPage;
  tab2Root = CheckInPage;
  tab3Root = StayPage;
  tab4Root = CheckOutPage;



	// slides = [
 //    {
 //    	// component: GetReadyPage,
 //      title: "Welcome to the Docs!",
 //      description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
 //      image: "assets/imgs/ica-slidebox-img-1.png",
 //    },
 //    {
 //    	// component: GetReadyPage,
 //      title: "What is Ionic?",
 //      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
 //      image: "assets/imgs/ica-slidebox-img-2.png",
 //    },
 //    {
 //    	// component: GetReadyPage,
    	
 //      title: "What is Ionic Cloud?",
 //      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
 //      image: "assets/imgs/ica-slidebox-img-3.png",
 //    }

  // ];
  constructor() {

  }
}
