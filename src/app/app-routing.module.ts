import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { SiteLayoutComponent } from './layout/site-layout/site-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { AdminHomePageComponent } from './pages/admin-home-page/admin-home-page.component';
import { AdminUserPageComponent } from './pages/admin-user-page/admin-user-page.component';
import { AdminRolePageComponent } from './pages/admin-role-page/admin-role-page.component';
import { UserCardPageComponent } from './pages/user-card-page/user-card-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ReactiveProgramlamaComponent } from './pages/reactive-programlama/reactive-programlama.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AdminPanelGuard } from './guards/admin-panel.guard';
import { PipesComponent } from './pipes/localization/pipes.component';
import { CounterPageComponent } from './pages/counter-page/counter-page.component';

const routes: Routes = [
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      {
        path: '', // bu layout ilk açılış sayfası olacağı için
        component: HomePageComponent,
        data: {
          title: 'Anasayfa',
        },
      },
      {
        path: 'about',
        component: AboutPageComponent,
        data: {
          // sayfa geçişlerinde componentere sabit verileri taşırız
          title: 'Hakkımızda',
          permissions: ['user-create', 'user-delete'],
        },
      },
      {
        path: 'contact',
        component: ContactPageComponent,
        data: {
          title: 'iletişim',
        },
      },
    ],
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [AdminPanelGuard], // artık tüm adm,n sayfalar bu guard tarafından korunsun
    children: [
      {
        path: '', // Admin Home page
        component: AdminHomePageComponent,
      },
      {
        path: 'users', // Admin Users page
        component: AdminUserPageComponent,
      },
      {
        path: 'user-card/:id/:username', // admin/user-detail/1000/ali.c
        component: UserCardPageComponent,
      },
      {
        path: 'roles', // Admin Roles page
        component: AdminRolePageComponent,
      },
    ],
  },
  {
    path: 'rxjs',
    component: ReactiveProgramlamaComponent,
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'pipes',
    component: PipesComponent,
  },
  {
    path: 'counters',
    component: CounterPageComponent,
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
