import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    activeSidebar: number;
    constructor() {

    }

    ngOnInit() {
        this.activeSidebar = 1;
    }
    OnMenuChange(MenuId: number)
    {
        console.log(MenuId);
        this.activeSidebar = MenuId;
    }
}
