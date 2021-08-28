import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-dossiers',
    templateUrl: './dossiers.page.html',
    styleUrls: ['./dossiers.page.scss'],
})
export class DossiersPage implements OnInit {

    mode: boolean = false;
    mode2: boolean = false;

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

    testOpen(){
        const divList = document.getElementById('list1');
        if (divList.style.display == "none"){
            divList.style.display = "block";
            this.mode = true;
        }else {
            divList.style.display = "none";
            this.mode = false;
        }
    }

    testOpen2(){
        const divList = document.getElementById('list2');
        if (divList.style.display == "none"){
            divList.style.display = "block";
            this.mode2 = true;
        }else {
            divList.style.display = "none";
            this.mode2 = false;
        }
    }

    goToDetails(){
        this.router.navigateByUrl('/info-dossier');
    }

}
