import { Component, OnInit } from '@angular/core';
import { NavItem } from '../models/navItem';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  items: NavItem[] = [
    { title: "ATP Rankings", routeUri: "Home" },
    { title: "Players", routeUri: "Players" },
    { title: "Top", routeUri: "Top" }];

  selectedItem?: NavItem;

  ngOnInit(): void {
    this.selectedItem = this.items[0];
  }

  onSelect(item: NavItem): void {
    this.selectedItem = item;
  }
}
