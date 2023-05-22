import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of, retry, take, tap } from 'rxjs';
import jwt_decode from 'jwt-decode';

export interface LoginModel {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}

  login(model: LoginModel) {
    return this.httpClient
      .post<LoginModel>('https://reqres.in/api/login', model)
      .pipe(
        take(1),
        tap((result: any) => {
          console.log('result', result);

          if (result.token != undefined) {
            const token =
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiZW1haWwiOiJqaG9uQHRlc3QuY29tIiwicm9sZXMiOlsiYWRtaW4iLCJtYW5hZ2VyIl0sInBlcm1pc3Npb25zIjpbInVzZXItY3JlYXRlIiwidXNlci1kZWxldGUiXSwiaWF0IjoxNTE2MjM5MDIyfQ.mCAZjEWLkxxiuALM0UyjP4zfihoeTRqk4G1Jnqqrje4';
            localStorage.setItem('accessToken', token);

            var decoded: any = jwt_decode(token);
            localStorage.setItem('userInfo', JSON.stringify(decoded));
            window.location.href = '/'; // js üzerinden yönlendirme
          }
        }),
        catchError((err: any) => {
          // hata durumunda hata modelini değiştridiğimiz kısım
          console.log('err', err);

          if (err.status == 400) {
            const errObject = {
              message: 'Username veya parola hatalı',
            };

            return Promise.reject(errObject);
          } else if (err.status == 404) {
            const errObject = {
              message: 'Böyle bir kaynak mevcut değil',
            };
            return Promise.reject(errObject);
          } else {
            return Promise.reject(err);
          }

          // return of(errObject);
        }),
        retry(3)
      );
  }
}
