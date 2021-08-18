import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery'

@Component({
    selector: 'app-dossiers',
    templateUrl: './dossiers.page.html',
    styleUrls: ['./dossiers.page.scss'],
})
export class DossiersPage implements OnInit {

    mode: boolean = false;
    constructor() {
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

}
