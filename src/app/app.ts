import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule, ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  operation1 = 0;
  operation2 = 0;
  result = 0;

  add(): void {
    this.result = this.operation1 + this.operation2;
  }

  subtract(): void {
    this.result = this.operation1 - this.operation2;
  }

  multiply(): void {
    this.result = this.operation1 * this.operation2;
  }

  divide(): void {
    this.result = this.operation1 / this.operation2;
  }
}
