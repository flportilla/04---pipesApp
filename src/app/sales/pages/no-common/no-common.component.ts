import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-common',
  templateUrl: './no-common.component.html',
  styles: [
  ]
})
export class NoCommonComponent {

  //i18nSelect
  public name: string = 'Nathaly'
  public gender: string = 'female'

  public mapInvitation = {
    male: 'Invitarlo',
    female: 'Invitarla'
  }

  //i18nPlural
  public clients: string[] = ['Fabian', 'Nathaly', 'pascal']
  public clientsMap = {
    '=0': 'no hay clientes esperando',
    '=1': 'hay un cliente esperando',
    'other': 'hay # clientes esperando'
  }

  changeClient() {
    this.name = 'Fabian'
    this.gender = 'male'
  }

  deleteClient() {
    this.clients.pop()
  }

  //keyValue pipe
  public person = {
    name: 'Fabián',
    age: 29,
    address: 'Piedecuesta, Santander'
  }

  //JsonPipe

  public heroes = [
    {
      name: 'superman',
      fly: true
    },
    {
      name: 'flash',
      fly: false
    },
    {
      name: 'aquaman',
      fly: false
    },
  ]

  //AsyncPipe

  public myObservable = interval(1000)

  public valuePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise solved')
    }, 3500);
  })

}
