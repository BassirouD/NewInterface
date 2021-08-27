import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-dossiers',
    templateUrl: './dossiers.page.html',
    styleUrls: ['./dossiers.page.scss'],
})
export class DossiersPage implements OnInit {

    mode: boolean = false;
    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    openDetail() {
        // this.rest[i].open = !this.rest[i].open;
        // console.log(i)
        // this.mode = true;

        document.getElementById('monID1').style.visibility = "compact"
    }

    closeDetail() {
        // console.log(i)
        this.mode = false;
    }

    gotToFavoris(){
        this.router.navigateByUrl('/tabs/favoris');
        localStorage.setItem('key', 'text3');
    }

    go(){
        this.router.navigateByUrl('/info-dossier');
    }

}
