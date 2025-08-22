import { Component } from '@angular/core';
import { MyButton } from './shared/my-button/my-button';
import { Active } from './shared/active';

@Component({
  selector: 'app-root',
  imports: [MyButton, Active],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'my-app-1';
  protected saved = true;
  protected hasError = false;
}
