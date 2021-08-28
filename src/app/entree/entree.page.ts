import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

// import {ScreenOrientation} from "@ionic-native/screen-orientation/ngx";

@Component({
    selector: 'app-entree',
    templateUrl: './entree.page.html',
    styleUrls: ['./entree.page.scss'],
})
export class EntreePage implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    // testScreen(){
    //     console.log(this.screenOrientation.type);
    // }

    goToHome() {
        this.router.navigateByUrl('/tabs/accueil');
        localStorage.setItem('key', 'text1')
    }

    goToHome2() {
        this.router.navigateByUrl('/tabs/dossiers');
        localStorage.setItem('key', 'text2')
    }

    goTestTransfer() {
        // this.router.navigateByUrl('/test-transfert');
    }

    goToFavories() {
        this.router.navigateByUrl('/tabs/favoris');
        localStorage.setItem('key', 'text3')
    }

    goToSetting() {
        this.router.navigateByUrl('/tabs/parametres');
        localStorage.setItem('key', 'text4')
    }

    goToSupport(){
        this.router.navigateByUrl('/support');
    }

}
