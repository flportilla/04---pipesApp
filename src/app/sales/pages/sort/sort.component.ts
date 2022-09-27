import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/sales.interfaces';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styles: [
  ]
})
export class SortComponent {

  isUp: boolean = false
  orderBy: string = ''

  heroes: Hero[] = [
    {
      name: 'Superman',
      flies: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      flies: false,
      color: Color.black
    },
    {
      name: 'Flash',
      flies: false,
      color: Color.red
    },
    {
      name: 'Green Lantern',
      flies: true,
      color: Color.green
    },
  ]

  toggle() {
    this.isUp = !this.isUp
  }

  changeOrder(value: string) {
    this.orderBy = value
  }

}
