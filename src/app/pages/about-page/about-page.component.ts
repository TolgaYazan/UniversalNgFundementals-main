import { Component, OnDestroy, OnInit } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CounterStateService } from 'src/app/rxjsSubjects/counter-state.service';

@Component({
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
})
export class AboutPageComponent implements OnInit, OnDestroy {
  // ActivatedRoute route üzerinden gönderilen bilgileri bu servis ile erişiriz.
  // servisler genelde private tanımlanır component içerisinden çalışır.

  constructor(
    private routeService: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta,
    public counterState: CounterStateService
  ) {
    console.log('about-contructor');
    // dinamik route değerleri, route gönderilen data bilgisi, querystring bilgisi, route url
    console.log('routeService', this.routeService);
  }

  counter = 0;
  timer = setInterval(() => {
    this.counter++;
    console.log('interval', this.counter);
  }, 1000);

  // Anguar Component Lifecyle
  // Lifecyle methodlarına Hooks ismini veriyoruz.
  ngOnDestroy(): void {
    console.log('about-page domadan çıktı');
    clearInterval(this.timer);
  }

  ngOnInit(): void {
    console.log('about-page-doma girdi');

    const title = (this.routeService.snapshot.data as any).title;
    this.titleService.setTitle(title);
    this.titleService.getTitle(); // current değeri okumak için
    this.metaService.addTag({ content: 'Hakkımızda Sayfası', name: 'page' });

    //  const tag:MetaDefinition;

    // MetaService, TitleService
  }
}
