import {Component, OnInit} from '@angular/core';
import {ModalController} from "@ionic/angular";
import {VisualiserComponent} from "../popup-favoris/visualiser/visualiser.component";
import {AjoutFavoriComponent} from "../popup-favoris/ajout-favori/ajout-favori.component";

@Component({
    selector: 'app-favoris',
    templateUrl: './favoris.page.html',
    styleUrls: ['./favoris.page.scss'],
})
export class FavorisPage implements OnInit {

    constructor(private modalController: ModalController) {
    }

    ngOnInit() {
    }

    async openPopop() {
        const modal = await this.modalController.create({
            component: VisualiserComponent,
            cssClass: 'cal-modal',
            swipeToClose: true,
        });
        return await modal.present();
    }

    async openPopup() {
        const modal = await this.modalController.create({
            component: AjoutFavoriComponent,
            cssClass: 'cal-modal',
            swipeToClose: true,
        });
        return await modal.present();
    }


}
