import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // request işlemlerinde araya interceptor methodunda giriliyor
    // request ve response bazlı çalışır ikisinde de araya girer.
    // debugger; debug modda test etmek için kodu durdurduğumuz bir teknik

    const token = localStorage.getItem('accessToken');

    if (token != undefined) {
      // JWT kullanıcında Bearer Authentication yöntemi ile header üzerinden access token taşıyoruz.
      // const myHeaders = request.headers
      //   .set('Authorization', `Bearer ${token}`)
      //   .set('AppId', 'myId');

      const myHeaders = request.headers.append(
        'Authorization',
        `Bearer ${token}`
      );

      // request = request.clone({
      //   setHeaders: { Deneme: '1234' },
      // });

      request = request.clone({
        headers: myHeaders,
      });

      // console.log('request-1', request);
      // request kaldığı yerden devam etmek için next.handle methodu kullanıyoruz.
      return next.handle(request);

      // request nesnesini direk değiştiremediğimziden request.clone methodu ile clone oluşurup güncelliyoruz.
    }

    // console.log('request-2', request);
    // rate limiting api ddos saldırılarını engellemek için request kota koyarız.

    return next.handle(request);
  }
}
