import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items = [
         new Items(1, 'Watch Finding Nemo'),
         new Items(2, 'Buy Cookies'),
         new Items(3, 'Get new Phone Case')
       ];

  constructor() { }

  ngOnInit() {
  }

}
