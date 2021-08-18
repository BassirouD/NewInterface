import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-paiment-valider',
  templateUrl: './paiment-valider.component.html',
  styleUrls: ['./paiment-valider.component.scss'],
})
export class PaimentValiderComponent implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

    dismissModal(){
        this.modalController.dismiss();
    }

}
