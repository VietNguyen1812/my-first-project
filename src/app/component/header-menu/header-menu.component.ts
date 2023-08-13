import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent implements OnInit {
  items: MenuItem[] | undefined;
  activeItem : MenuItem | undefined;
  scrollableItems: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
        {label: 'Home', icon: 'pi pi-fw pi-home'},
        {label: 'Blog', icon: 'pi pi-fw pi-calendar'},
        {label: 'Counter', icon: 'pi pi-fw pi-pencil'},

    ];

    this.scrollableItems = Array.from({ length: 50 }, (_, i) => ({label: `Tab ${i + 1}`}));

    this.activeItem = this.items[0];


}
}
