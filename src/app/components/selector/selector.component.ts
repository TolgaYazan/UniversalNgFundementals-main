import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface SelectorType {
  displayValue: string | number; // zorunlu required alan
  displayText: string;
  selected?: boolean; // typescript de
}

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss'],
})
export class SelectorComponent {
  //  data: SelectorType = {
  //   displayValue: '06',
  //   displayText: 'Ankara',
  // };

  public selectedValue!: string;

  @Input() dataSource!: SelectorType[];
  // @Input() dataSource1: SelectorType | undefined; yukarıdaki aynı yazım şekli kısa yazım hali
  @Output() onSelect: EventEmitter<string> = new EventEmitter<string>();

  select(event: any) {
    console.log('html element event', event);

    this.selectedValue = event.target.value;
    // seçili olmayanlar.
    const objs: any = this.dataSource.filter(
      (x) => x.displayValue != this.selectedValue
    );

    // map ile obje referansı içerisinde güncelleme yaptık.
    objs.map((item: any) => {
      item.selected = false; // daha önceden seçili olanın seçimini kaldır.
    });

    console.log('dataSource', this.dataSource);

    this.onSelect.emit(event.target.value); // seçilenin value değerini fırlat.
  }
}
