import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockButtonComponent } from './block-button/block-button.component';
import { SelectorComponent } from './selector/selector.component';

@NgModule({
  declarations: [BlockButtonComponent, SelectorComponent], // component module içerisinde tanımlı olsun
  imports: [
    CommonModule, // ng default bileşenleri kullanmamızı sağlayan bir module
  ],
  exports: [BlockButtonComponent, SelectorComponent], // component başka module üzerinden de kullanılsın
})
export class UniModule {}
