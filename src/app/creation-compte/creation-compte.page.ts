import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-creation-compte',
    templateUrl: './creation-compte.page.html',
    styleUrls: ['./creation-compte.page.scss'],
})
export class CreationComptePage implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    goToLogin() {
        this.router.navigateByUrl('/login');
    }

}
