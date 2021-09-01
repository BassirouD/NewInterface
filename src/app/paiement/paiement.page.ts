import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {PaimentValiderComponent} from "../paiment-valider/paiment-valider.component";
import {PaimentValiderFMComponent} from "../paiment-valider-fm/paiment-valider-fm.component";

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.page.html',
  styleUrls: ['./paiement.page.scss'],
})
export class PaiementPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  async openOM(){
      const modal = await this.modalController.create({
          component: PaimentValiderComponent,
          cssClass: 'cal-modal1',
          swipeToClose: true
      });
      return await modal.present();
  }

    async openFM(){
        const modal = await this.modalController.create({
            component: PaimentValiderFMComponent,
            cssClass: 'cal-modal1',
            swipeToClose: true
        });
        return await modal.present();
    }

}
