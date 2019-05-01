import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    isConnected: boolean;

    constructor() {
    }

    ngOnInit() {
        this.isConnected = localStorage.getItem('user') === null;
    }

    logout() {
        localStorage.removeItem('user');
    }
}
