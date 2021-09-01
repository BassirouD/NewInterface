import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-tabs',
    templateUrl: 'tabs.page.html',
    styleUrls: ['tabs.page.scss']
})
export class TabsPage {
    private selecteTextId: string = localStorage.getItem('key');

    constructor(private router: Router) {
    }

    setSelectedText(textId: string) {
        this.selecteTextId = textId;
    }

    getTextColor(textId: string): string {
        return this.selecteTextId == textId ? "active-item" : "";
    }

    goToAccueil(){
        this.router.navigateByUrl('/entree')
    }

}
