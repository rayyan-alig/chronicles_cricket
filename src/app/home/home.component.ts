import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  images: string[] = [
    'assets/ssmith.jpg',
    'assets/cook.webp',
    'assets/devillier.webp',
    'assets/rahuldravid1.webp',
    'assets/mccullum.jpg',
    'assets/watson.jpg',
    'assets/yuvraj.webp',
    'assets/sangakkara.jpg',
    'assets/sakhtar.jpg'
  ];
}
