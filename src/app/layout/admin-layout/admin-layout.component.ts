import { Component, OnInit } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss'],
})
export class AdminLayoutComponent implements OnInit {
  ngOnInit(): void {
    this.items = [
      {
        label: 'User Management',
        icon: 'pi pi-fw pi-users',
        items: [
          [
            {
              label: 'Kullanı Ekranları',
              items: [
                { label: 'Kullanıcı Listesi', routerLink: ['users'] },
                { label: 'Yeni Kullanıcı', routerLink: ['new-user'] },
              ],
            },
            {
              label: 'Rol Ekranları',
              items: [
                {
                  label: 'Rol Listesi',
                  routerLink: ['roles'],
                },
              ],
            },
          ],
        ],
      },
      {
        label: 'Yetki Yönetimi',
        icon: 'pi pi-fw pi-lock',
        items: [
          [
            {
              label: 'Yetkilendirme Ekranları',
              items: [
                {
                  label: 'Kullanıcı Yetkileri',
                  routerLink: ['user-permissions'],
                },
                {
                  label: 'Rollendirme Yetkileri',
                  routerLink: ['role-permisions'],
                },
              ],
            },
          ],
        ],
      },
    ];
  }

  items!: MegaMenuItem[];
}
