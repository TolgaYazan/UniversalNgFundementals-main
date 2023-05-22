import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteLayoutComponent } from './site-layout/site-layout.component';
import { MenubarModule } from 'primeng/menubar';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { MegaMenuModule } from 'primeng/megamenu';

@NgModule({
  declarations: [SiteLayoutComponent, AdminLayoutComponent],
  imports: [CommonModule, MenubarModule, MegaMenuModule],
  exports: [SiteLayoutComponent, AdminLayoutComponent],
})
export class LayoutModule {}
