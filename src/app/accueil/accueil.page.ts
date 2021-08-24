import { Component, OnInit } from '@angular/core';
import {ActionSheetController} from "@ionic/angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {

    constructor(public actionSheetController: ActionSheetController, private router: Router) {}

    async presentActionSheet() {
        const actionSheet = await this.actionSheetController.create({
            header: 'Albums',
            cssClass: 'my-custom-class',
            buttons: [{
                text: 'Delete',
                role: 'destructive',
                icon: 'trash',
                handler: () => {
                    console.log('Delete clicked');
                }
            }, {
                text: 'Share',
                icon: 'share',
                handler: () => {
                    console.log('Share clicked');
                }
            }, {
                text: 'Play (open modal)',
                icon: 'caret-forward-circle',
                handler: () => {
                    console.log('Play clicked');
                }
            }, {
                text: 'Favorite',
                icon: 'heart',
                handler: () => {
                    console.log('Favorite clicked');
                }
            }, {
                text: 'Cancel',
                icon: 'close',
                role: 'cancel',
                handler: () => {
                    console.log('Cancel clicked');
                }
            }]
        });
        await actionSheet.present();

        const { role } = await actionSheet.onDidDismiss();
        console.log('onDidDismiss resolved with role', role);
    }



  ngOnInit() {
  }

    login(){
        this.router.navigateByUrl('/login');
    }

}
