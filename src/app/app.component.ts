import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

})
export class AppComponent implements OnInit {

  constructor(private PrimeNgConfig: PrimeNGConfig) {
  }

  ngOnInit() {
    this.PrimeNgConfig.ripple = true
  }
}
