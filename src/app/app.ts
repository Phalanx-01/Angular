import { Component, inject } from '@angular/core';
import { ActiveStateDirective } from './active-state.directive';
import { ActionButtonComponent } from './action-button/action-button.component';
import { Person } from './person';
import { CustomPipe } from "./custom-pipe";
import { CommonModule } from '@angular/common';
import { DataCache } from './data-cache';
import { ProductCard } from "./components/product-card/product-card";
import { Transforms } from "./components/transforms/transforms";
import { TwoWayBinding } from "./components/two-way-binding/two-way-binding";


@Component({
  selector: 'app-root',
  imports: [ActiveStateDirective, ActionButtonComponent, CustomPipe, CommonModule, ProductCard, Transforms, TwoWayBinding],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'my-app-1';
  protected saved = true;
  protected hasError = false;
  protected myCounter = 0;
  
  // New properties for directive/component demo
  protected isFormValid = true;
  protected isLoading = false;
  protected notificationCount = 3;

  protected dataCache = inject(DataCache);

  persons: Person[] = [
    { firstName: "John", lastName: "Doe", gender: "Male" },
    { firstName: "Jane", lastName: "Smith", gender: "Female" }
  ];

  toggleFormValid() {
    this.isFormValid = !this.isFormValid;
  }

  simulateLoading() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

  onActionClick() {
    console.log('Action button clicked!');
    this.simulateLoading();
  }

  addPersonToSignal() {
    const newPerson: Person = {
      firstName: 'Signal',
      lastName: 'Person',
      gender: 'Male'
    }
    this.dataCache.addPerson(newPerson);
    console.log('Added to Signal, current data:', this.dataCache.data());
  }

  addPersonToObservable() {
    const newPerson: Person = {
      firstName: 'Observable',
      lastName: 'Person',
      gender: 'Female'
    };
    this.dataCache.addPersonObservable(newPerson);
    console.log('Added to Observable, current data:', this.dataCache.data$);
  }

  incrementCounter() {
    this.myCounter++;
    console.log('Delete clicked! Counter is now:', this.myCounter);
  }
  
}