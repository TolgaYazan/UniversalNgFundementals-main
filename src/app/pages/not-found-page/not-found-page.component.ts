import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.scss'],
})
export class NotFoundPageComponent {
  /**
   * ts tarafından navigate işlemlerini route service ile yaparız
   */
  constructor(private routerService: Router) {}

  click() {
    const result = confirm('Anasayfa yönlendirilmek istediğiniz emin misiniz');

    if (result) {
      this.routerService.navigate(['/']);
    }
  }
}
