import { Component } from '@angular/core';
import { Items } from './items'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = [
         new Items(1, 'Watch Finding Nemo'),
         new Items(2, 'Buy Cookies'),
         new Items(3, 'Get new Phone Case')
       ];
      }
