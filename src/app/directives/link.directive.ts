import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[link]',
})
export class LinkDirective {
  // elementlere erişip görünümlerini değiştirmemize olanak sağlayan yapılar
  // ElementRef angularda element yakalıyıcı bir service, directive uygulandığı elementi yakalıyor.
  // Renderer2 DOM daki referansı verilen elemente özellikler kazandırmamızı sağlayan bir dom servisi
  constructor(private el: ElementRef, private renderer: Renderer2) {
    const htmlEl = this.el.nativeElement as HTMLElement;
    htmlEl.style.padding = '5px';
    htmlEl.style.textDecoration = 'underline';
    htmlEl.style.color = 'blue';
    htmlEl.style.cursor = 'pointer';
  }

  // mouseover olunca yazı kırmızı olsun, renderService ile yaptık
  @HostListener('mouseover', ['$event'])
  onMouseOver(event: any) {
    console.log('event', event);
    this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
  }

  @HostListener('mouseout', ['$event'])
  onMouseOut(event: any) {
    console.log('event', event);
    this.renderer.setStyle(this.el.nativeElement, 'color', 'blue');
  }
}
