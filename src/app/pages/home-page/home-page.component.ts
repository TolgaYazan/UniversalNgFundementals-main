import { Component } from '@angular/core';
import { SelectorType } from 'src/app/components/selector/selector.component';

@Component({
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  cities: any[] = [
    {
      id: 1,
      name: 'izmir',
      code: '35',
      selected: false,
    },
    {
      id: 2,
      name: 'ankara',
      code: '06',
      selected: false,
    },
    {
      id: 3,
      name: 'istanbul',
      code: '34',
      selected: true,
    },
  ];

  // auto-mapping gibi bir yapı
  cityMaps = this.cities.map((item: any) => {
    return {
      displayValue: item.code,
      displayText: item.name,
      selected: item.selected,
    } as SelectorType; // type casting işlemi
  });

  selectedCity!: string;

  onCitySelect(value: string) {
    console.log('value', value);
    this.selectedCity = value;
  }

  visible: boolean = false; // initial state false
  btnColor: string = 'purple';

  showHide() {
    this.visible = !this.visible;
    // visible property state değiştiriyoruz.
  }

  btnClick() {
    alert('tıklandı');
  }
}
