import { Component } from '@angular/core';
import { CounterStateService } from 'src/app/rxjsSubjects/counter-state.service';

@Component({
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.scss'],
})
export class CounterPageComponent {
  msg!: string;
  isActive!: boolean;

  onModelChange(event: number) {
    // this.counter = event;
    console.log('e', event);
    this.counterState.incrementByValue(Number(event));
  }
  // counter: number = this.counterState.getCurrentValue();
  counter: number = 0;
  constructor(private counterState: CounterStateService) {
    // veri setindeki değişimi yakalamak için takibe almamız lazım
    this.counterState.counterSub.subscribe((curr: number) => {
      this.counter = curr;
    });
  }

  onDecrement() {
    this.counterState.decrement();
    // console.log('value', this.counterState.getCurrentValue());
  }
  onIncrement() {
    this.counterState.increment();
    // console.log('value-2', this.counterState.getCurrentValue());
  }
}
