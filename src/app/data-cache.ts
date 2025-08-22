import { Injectable, signal } from '@angular/core';
import { Person } from './person';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataCache {

  constructor() { 
    console.log('DataCache Service created!');
  }
  
  // Signal Ansatz
  private _data = signal<Person[]>([]);
  readonly data = this._data.asReadonly();

  addPerson(person: Person) {
    this._data.update(current => [...current, person]);
  }
  
  // BehaviorSubject Ansatz
  private _data$ = new BehaviorSubject<Person[]>([]);
  readonly data$ = this._data$.asObservable();

  addPersonObservable(person: Person) {
    const current = this._data$.value;
    this._data$.next([...current, person]);
  }

}
