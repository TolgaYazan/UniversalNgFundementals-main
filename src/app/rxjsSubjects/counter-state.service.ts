import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterStateService {
  counterSub: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() {}

  // state değişitircek olan methodları caseleri burada tanımlarız.

  increment() {
    // methodu çağırınca next ile bir sonraki değeri içerisine gönderiyoruz.
    this.counterSub.next(this.counterSub.value + 1);
  }

  decrement() {
    // sayac hiç bir zaman negatif olmasın
    if (this.counterSub.value > 0) {
      this.counterSub.next(this.counterSub.value - 1);
    }
  }

  incrementByValue(amount: number) {
    this.counterSub.next(this.counterSub.value + amount);
  }

  reset() {
    this.counterSub.next(0);
  }

  // diğer componentlerden sayacın güncel değerini okumak için kullanırız.
  getCurrentValue() {
    return this.counterSub.value;
  }
}
