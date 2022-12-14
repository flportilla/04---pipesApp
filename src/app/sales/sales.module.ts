import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { NumbersComponent } from './pages/numbers/numbers.component';
import { NoCommonComponent } from './pages/no-common/no-common.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { SortComponent } from './pages/sort/sort.component';

import { UpperPipe } from './pipes/uppercase.pipe';
import { FlyPipe } from './pipes/flies.pipe';
import { OrderPipe } from './pipes/order.pipe';



@NgModule({
  declarations: [
    NumbersComponent,
    NoCommonComponent,
    BasicsComponent,
    SortComponent,
    UpperPipe,
    FlyPipe,
    OrderPipe,
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
  ],
  exports: [
    NumbersComponent,
    NoCommonComponent,
    BasicsComponent,
    SortComponent
  ]
})
export class SalesModule { }
