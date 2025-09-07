import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonAvatar, IonButton } from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonAvatar, IonButton],
})
export class HomePage {
  constructor(private navCTRL : NavController) {}

  ShowPageInfo(){
    this.navCTRL.navigateForward('info')
  }
}

