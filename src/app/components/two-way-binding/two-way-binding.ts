import { Component, model } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  imports: [],
  templateUrl: './two-way-binding.html',
  styleUrl: './two-way-binding.css'
})
export class TwoWayBinding {
  count = model(0);

  increment() {
    this.count.update(val => val + 1);
  }

  reset() {
    this.count.set(0);
  }

}
