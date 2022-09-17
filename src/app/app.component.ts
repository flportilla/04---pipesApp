import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

})
export class AppComponent {
  
  name: string = 'fabian portilla'
  value: number = 1000
  obj = {
    name: 'flportilla'
  }

  showName(){
    console.log(this.name);
    console.log(this.value);
    console.log(this.obj);
  }


}
