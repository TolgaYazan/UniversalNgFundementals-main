import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UniModule } from './components/uni.module';
import { LayoutModule } from './layout/layout.module';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { AdminHomePageComponent } from './pages/admin-home-page/admin-home-page.component';
import { AdminRolePageComponent } from './pages/admin-role-page/admin-role-page.component';
import { AdminUserPageComponent } from './pages/admin-user-page/admin-user-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { UserCardPageComponent } from './pages/user-card-page/user-card-page.component';
// @ile tanımlanmış yapılar bir sınıfın angular tarafında farklı şekilde hizmet vermesini sağlar decorator denir
import { TableModule } from 'primeng/table';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { registerLocaleData } from '@angular/common';

import localeTr from '@angular/common/locales/tr';
import localeFr from '@angular/common/locales/fr';
import { HttpProtocolPipe } from './pipes/http-protocol.pipe';
import { PipesComponent } from './pipes/localization/pipes.component';
import { LinkDirective } from './directives/link.directive';
import { CounterPageComponent } from './pages/counter-page/counter-page.component';

registerLocaleData(localeTr);
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    // uygulama içerisindeki component,directive,pipe buraya tanımlar.
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    ContactPageComponent,
    AdminHomePageComponent,
    AdminUserPageComponent,
    AdminRolePageComponent,
    UserCardPageComponent,
    NotFoundPageComponent,
    LoginPageComponent,
    HttpProtocolPipe,
    PipesComponent,
    LinkDirective,
    CounterPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Bir module başka bir module altındaki bileşenleri referans aalbilir. Dışarıdan npm i ile yüklenen paketlere ait modulleri tanımlarız.
    ButtonModule,
    UniModule,
    LayoutModule,
    TableModule,
    HttpClientModule, // Http işlemlerini yapmak için geliştirilmiş bir module httpclient service bağlantı bu module üzerinden sağlanıyor.
    ReactiveFormsModule, // reactive form işlemlerini yönettiğimiz module
    PanelModule,
    InputTextModule,
    PasswordModule,
    BrowserAnimationsModule, // PrimeNg animasyonlar için
    FormsModule, //NgModel kullanımı için ekledik.
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    { provide: LOCALE_ID, useValue: 'tr' },
  ], // uygulama içerisindeki hizmetlerimiz buraya yazıyoruz
  bootstrap: [AppComponent], // uygulama ilk bu component çalıştır
})
export class AppModule {}
