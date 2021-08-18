import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterEvent} from "@angular/router";

@Component({
    selector: 'app-menu',
    templateUrl: './menu.page.html',
    styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

    pages = [
        {
            title: 'Accueil',
            url: '/menu/accueil'
        },
        {
            title: 'Mes dossiers',
            url: '/menu/dossiers'
        },
        {
            title: 'Mes favoris',
            url: '/menu/favoris'
        }
    ];

    selectedPath = '';

    constructor(private router: Router,private activatedRoute: ActivatedRoute) {
        this.router.events.subscribe((event: RouterEvent) => {
            if (event && event.url){
                this.selectedPath = event.url;
            }
        })
    }

    public folder: string;


    ngOnInit() {
        this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    }


}
