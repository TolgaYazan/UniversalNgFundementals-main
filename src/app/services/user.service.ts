import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../pages/admin-user-page/admin-user-page.component';
import { retry, take } from 'rxjs/operators';
// service olarak tanımlanmış ve component üzerinden constructor injection yapılabilir
@Injectable({
  providedIn: 'root',
})
export class UserService {
  // servisler başka ihtiyaçları kaşılamak için başka servislere gerek duyabilir.
  constructor(private httpClient: HttpClient) {}

  // not servis içerisinde subscribe yapmıyoruz
  // servislere component içerisinde subscribe olarak ilgili observable süreçlerini tetikliyoruz
  getUsers(): Observable<User[]> {
    return this.httpClient
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(take(1), retry(3)); // herhangi bir network kesintisini handle edebilmek için retry policy yaptık.
  }

  getUserById(id: number): Observable<User> {
    return this.httpClient
      .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`, {
        headers: {
          AcceptLanguage: 'tr',
          AppId: 'xxx-code',
        },
      })
      .pipe(take(1), retry(3)); // herhangi bir network kesintisini handle edebilmek için retry policy yaptık.
    // $"deneme_{id}"
  }

  // API endpointlerini env üzerinden okuma
}
