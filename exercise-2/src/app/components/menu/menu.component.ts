import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  showsMenu = false;

  constructor() {}

  ngOnInit(): void {
  }

  opensMenu() {
    this.showsMenu = !this.showsMenu;
  }
}
