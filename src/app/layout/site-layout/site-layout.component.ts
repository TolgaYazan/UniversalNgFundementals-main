import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.scss'],
})
export class SiteLayoutComponent implements OnInit {
  items!: MenuItem[];

  // Hook componentlere davranış kazandıran yapılar.
  ngOnInit(): void {
    console.log('ngOnit Menubar');

    let user!: any;

    if (localStorage.getItem('userInfo') != undefined) {
      user = JSON.parse(localStorage.getItem('userInfo') as any);
    }

    // component ilk load olurken yapılacak olan işlemleri yazıyoruz.
    // component doma girerken apidan load edilecek olan verileri burada tanımlarız
    this.items = [
      {
        label: user?.email || 'Oturum Aç', // user.email yoksa guest yazdır
        icon: 'pi pi-fw pi-user',
        command(event) {
          if (user == undefined) {
            window.location.href = '/login';
          }
        },
      },
      {
        label: 'Güvenli Çıkış',
        icon: 'pi pi-fw pi-sign-out',
        command(event) {
          // menu içerisine komut yazma işlemi
          const result = confirm('siteden çıkmak istediğinize emin misiniz');
          if (result) {
            localStorage.clear();
            window.location.reload();
          }
        },
      },
      {
        label: 'Hakkımızda',
        icon: 'pi pi-fw pi-about',
        routerLink: ['/about'],
        items: [
          {
            label: 'Vizyonumuz',
          },
          {
            label: 'Misyonumuz',
            url: '#',
          },
        ],
      },
      {
        label: 'Anasayfa',
        routerLink: ['/'],
        icon: 'pi pi-fw pi-home',
      },
      {
        label: 'İletişim',
        routerLink: ['/contact'],
        icon: 'pi pi-fw pi-phone',
      },
      {
        label: 'Google',
        url: 'https://www.google.com',
        icon: 'pi pi-fw pi-google',
      },
      {
        label: 'Yönetim Paneli',
        routerLink: ['admin'],
        icon: 'pi pi-fw pi-users',
      },
      {
        label: 'Reactive Programlama',
        routerLink: ['rxjs'],
        icon: 'pi pi-fw pi-code',
      },
      {
        label: 'Pipes Örneği',
        routerLink: ['pipes'],
        icon: 'pi pi-fw pi-code',
      },
      {
        label: 'Counter Subject Örneği',
        routerLink: ['counters'],
        icon: 'pi pi-fw pi-code',
      },
    ];
  }
}
