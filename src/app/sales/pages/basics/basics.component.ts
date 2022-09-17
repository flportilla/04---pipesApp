import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent  {

  public nameLower: string = 'fabian'
  public nameUpper: string = 'FABIAN'
  public completeName: string = 'faBIaN'

  public date: Date = new Date() //today

}
