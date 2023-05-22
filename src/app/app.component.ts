import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // html den çağırılan isim
  templateUrl: './app.component.html', // html dosya konumu (template)
  styleUrls: ['./app.component.scss'], // css dosya konumu
})
export class AppComponent {
  // property binding
  title = 'AngularFundemantals'; // property, public ve template den erişilebilir.
  // önüne bir data modifiers koymadığımız takdirde public kabul eder.

  // angular property değişimlerini yakalıp ilgili componentin state değiştiren bir mekanizmaya sahiptir. Change Detection
  // event binding

  click() {
    // class içerisinde properylere this keywod ile erişiriz.
    this.title = 'tıklandı';
  }
}
