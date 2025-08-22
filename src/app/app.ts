import { Component } from '@angular/core';
import { ActiveStateDirective } from './active-state.directive';
import { ActionButtonComponent } from './action-button/action-button.component';
import { Person } from './person';
import { CustomPipe } from "./custom-pipe";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [ActiveStateDirective, ActionButtonComponent, CustomPipe, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'my-app-1';
  protected saved = true;
  protected hasError = false;
  
  // New properties for directive/component demo
  protected isFormValid = true;
  protected isLoading = false;
  protected notificationCount = 3;

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

  persons: Person[] = [
    { firstName: "John", lastName: "Doe", gender: "Male" },
    { firstName: "Jane", lastName: "Smith", gender: "Female" }
  ];
}