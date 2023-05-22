import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginModel, LoginService } from 'src/app/services/login.service';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  // FormBuilder service ile form oluşturucağız.

  constructor(private fb: FormBuilder, private loginService: LoginService) {}

  loginForm: FormGroup = this.fb.group({
    email: ['eve.holt@reqres.in', [Validators.required, Validators.email]],
    password: [
      'cityslicka',
      [
        Validators.required,
        Validators.minLength(8),
        // Validators.pattern(
        //   /^(?=.*[0-9])(?=.*[!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~])[a-zA-Z0-9!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~*]{8,}$/
        // ),
      ],
    ],
  });

  submit() {
    const param = this.loginForm.value as LoginModel;

    console.log('form-value', this.loginForm.value);

    this.loginService.login(param).subscribe({
      error(err: any) {
        console.log('err2', err);
        alert(err.message);
      },
      next(value) {
        console.log('value', value);
      },
    });
    // next ile dataya ihtiyaç yok login başarılı ise yönlendirmeyi service üzerinden yapacağız. localstorage token kaydedeceğiz.
  }
}
