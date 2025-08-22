import { Injectable, signal } from '@angular/core';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class DataCache {
  private _data = signal<Person[]>([]);
  readonly data = this._data.asReadonly();

  constructor() { 
    console.log('DataCache Service created!');
  }

  addPerson(person: Person) {
    this._data.update(current => [...current, person]);
  }
  
}
