import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-paiment-valider-fm',
  templateUrl: './paiment-valider-fm.component.html',
  styleUrls: ['./paiment-valider-fm.component.scss'],
})
export class PaimentValiderFMComponent implements OnInit {

    constructor(private modalController: ModalController) { }

    ngOnInit() {}

    dismissModal(){
        this.modalController.dismiss();
    }
}
