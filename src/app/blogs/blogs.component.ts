import { Component } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
  animations: [
    trigger('moveIn', [
      transition('void => *', [
        style({ transform: 'translateX(-100%)'}),
        animate('2000ms ease-out')
      ])
    ])
  ]
})
export class BlogsComponent {

}
