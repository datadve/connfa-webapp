import {Component, OnInit} from '@angular/core';
import {PageService} from "../../services/page.service";
import {Page} from "../../models/page";

@Component({
    selector: 'pages-list',
    templateUrl: '../../views/pages/menu.html',
})

export class PagesListComponent implements OnInit{

    public pages: Page[];

    constructor(private _pagesService: PageService) {
    }

    ngOnInit():any {
        this._pagesService.getPages().then((pages: Page[]) => this.pages = pages);
        this._pagesService.pagesChanged$.subscribe((pages: Page[]) => this.pages = pages);
    }
}
