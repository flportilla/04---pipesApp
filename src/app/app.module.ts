import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRounterModule } from './routes/app-rounter.module';
import { SalesModule } from './sales/sales.module';
import { SharedModule } from './shared/shared.module';

//Change local of the entire app
import localeEs from '@angular/common/locales/es-CO'
import { registerLocaleData } from '@angular/common'
registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    AppRounterModule,
    SharedModule,
    SalesModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-CO' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
