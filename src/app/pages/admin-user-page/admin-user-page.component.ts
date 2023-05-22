import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription, map, of, take } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { ProtocolTypes } from 'src/app/pipes/http-protocol.pipe';
export interface User {
  id: number;
  name?: string;
  surname?: string;
  username: string;
  email?: string;
  website?: string;
}

@Component({
  templateUrl: './admin-user-page.component.html',
  styleUrls: ['./admin-user-page.component.scss'],
})
export class AdminUserPageComponent implements OnInit, OnDestroy {
  users: User[] = [];
  userLoadSubs!: Subscription;

  // enumları template gösterme için getter yazıyoruz.
  // enum tiplerine template üzerinden erişemiyoruz.
  public get ProtocolTypes() {
    return ProtocolTypes;
  }

  constructor(
    private httpClient: HttpClient,
    private userService: UserService
  ) {}

  ngOnDestroy(): void {
    // if (this.userLoadSubs != undefined) {
    // this.userLoadSubs.unsubscribe();
    // }
  }

  fetchSampleLoadData() {
    // ES6
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response: Response) => {
        console.log('response', response);

        // 404 status koda bakıp hata ile ilgili bilgi yazdık
        // Javadaki Throw yapısı
        if (response.status == 401) {
          return Promise.reject({ message: 'Lütfen oturum açınız' });
        }

        if (response.status == 304) {
          return Promise.reject({ message: 'Kaynağa erişim yetkiniz yok' });
        }

        if (response.status == 404) {
          return Promise.reject({ message: 'Sayfa bulunamadı' });
        }

        return response.json(); // response değerini json çevirdik. okuyabilmek için
      })
      .then((data) => {
        console.log('data', data); // streamden json dönüştürdük.
        // data olarak apidan gelen değeri arayüz değişkenimize ektardık
        this.users = data;
      })
      .catch((err: any) => {
        console.log('err', err.message);
      });
  }

  observableSample() {
    const obb: Observable<number[]> = of([1, 2, 3, 4]);
    // new Promise kodunun aynısı of ise Observable döndürür.
    // obb.subscribe({
    //   // then catch blogu gibi bir observable çağırma işlemi yaptık
    //   next: (value) => {
    //     console.log('value', value);
    //   },
    // });

    let obb2 = new Observable((observer) => {
      // observer.error('hata'); // reject
      observer.next([1, 2, 3, 4]); // resolve işlemi
      // data stream veri akışı halinde veriler üzerinde manipüle işlemleri yapılabilir.
      observer.complete();
    });

    obb2
      .pipe(
        // veri akışını yönettiğimiz
        map((value: any) => {
          // response da değişiklik yapmak için kullanılan bir operatör rxJs map operatörü
          console.log('value', value);
          return value.map((item: number) => {
            return item * 5;
          });
        })
      )
      .subscribe({
        // veri akışına bağlandığımız yer
        next(value) {
          console.log('val0', value);
        },
      });

    obb2.subscribe({
      next(value) {
        console.log('val1', value);
      },
    });

    obb2.subscribe({
      next(value) {
        console.log('val2', value);
      },
    });

    obb2.subscribe({
      next(value) {
        console.log('val3', value);
      },
    });

    //var subs = obb2.subscribe({ next: () => {}, error(err) {}, complete() {} });
    //subs.unsubscribe(); // kaynak tüketimini dispose etmemiz lazım.
    // OnDestroy hook'unda bunu çağırmalıyız

    // Observable ile Promise 2 temel farkı var
    // Promise tanımladığı andan itibari ile kaynak tüketir.
    // Kaynak tüketmesi için then ile çağırılmasın gerek yoktur.
    // Observable da kaynak tüketimi new Observable kodunda olmaz sadece subscribe işleminde gerçekleşir
    // Bu sebeple iş bitince unsubscribe yapmamız gerekir.
    // Promiseler ile sadece method çağırma işlemi yapılırken
    // Observable da bir veri takibi söz konusudur.Amaç Observer Design Pattern ile nesne takibidir.
  }

  loadDataWithHttpClient() {
    this.userLoadSubs = this.httpClient
      .get('https://jsonplaceholder.typicode.com/users', {
        headers: {
          Authorization: 'Bearer TokenValue',
          ContentType: 'application-json',
        },
      })
      .pipe(take(1)) // Subscription sonlandırmak için bir teknik unutmayalım yada OnDestroy kısmında unsubscribe() yazalım.
      .subscribe({
        //  burdaki işlemi takibe al
        next: (response: any) => {
          // ile verinin resolve olduğu kısım
          console.log('response', response);
          this.users = response;
        },
        error(err) {
          // verinin cacth olduğu kısımı
          console.log('hata', err);
        },
        complete() {
          console.log('işlem bitti'); // finally blogu
        },
      });

    // sub.unsubscribe();
  }

  async ngOnInit() {
    // this.promiseSample();
    // this.fetchSampleLoadData();
    // this.asyncAwaitLoadDate();
    // ES7 async await yöntemi geldi.
    // this.loadDataWithHttpClient();
    this.userService.getUsers().subscribe({
      next: (data: User[]) => {
        this.users = data;
      },
    });
  }

  async asyncAwaitLoadData() {
    try {
      // async yapısı senkron bir kod akışında programlama yapmanızı sağlar
      // bu sebeple promise chain ile birbirini bekleyen işlemleri zincirlemenize gerek kalmaz.
      // satır satır kodlarımızı yazabiliriz.
      // async method ile kullanılmalıdır.
      // hata durumları catch blogunda yönetilir.
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      console.log('res', res);
      const dt = await res.json();
      console.log('dt', dt);
      const postRes = await fetch(
        'https://jsonplaceholder.typicode.com/posts324234'
      );

      if (postRes.status == 404) {
        // hataya yönelendirme yapar.
        Promise.reject({ message: 'Sayfa bulunamadı' });
      }

      const postdt = await postRes.json();
      console.log('postdt', postdt);
    } catch (error: any) {
      console.log('err', error.message);
    } finally {
      console.log('iki apide yüklendi');
    }
  }

  promiseSample() {
    // this.users.map((item:User) => {
    //   item.
    // });

    // tanım parçası
    // promise verinin t zamanda geldiği durumlarda kullanılan bir asenkron programlama tekniği
    const promise = new Promise((resolve, reject) => {
      // geçikmeli başlar ,delay

      resolve([{ id: 1, name: 'ali' }]); // sonuç olarak dönüş değeri
      // setTimeout(() => {
      //   console.log('promise-end');

      //   reject('işlem başarısız');
      // }, 1000);
    });

    let counter: number = 0;

    // setInterval(() => {
    //   counter++;
    //   console.log('counter', counter);
    // }, 100);

    // timer devam etmesi gerekirken promise içerisinde işlem kesintiye uğradı the n 1 kez çağırıldığında işlem 1 kez yapıld.
    const promise2 = new Promise((resolve, reject) => {
      // tekrarlama işlem var
      setTimeout(() => {
        counter++;
        resolve(counter);
      }, 1000);
    });

    // promise1 çağırdığımda oda timer kodunu çağırsın
    // user çekme işleminde user profile bilgisine çekmek istiyorum
    // promise zinciri promise chain yaparak işlemlerin sıralı bir şekilde senkronlaşmasını sağladık

    // user with roles and permissions
    // user-info?userId=1
    // user-roles?userId=1
    // user-permissions?userId=1
    // userRoleAndPermissionPromise
    const promiseWrap = new Promise((resolve, reject) => {
      const user: any = {};

      // user-info?userId=1
      return promise
        .then((data) => {
          // user endpoint
          console.log('promise-data', data);
          user.info = data;
          return promise2; // user profile
        })
        .then((timerData) => {
          // user-roles?userId=1
          console.log('timerData', timerData);
          user.roles = ['admin', 'manager'];
          return Promise.resolve(5);
        })
        .then((promise3Data) => {
          // user-permissions?userId=1
          user.permissions = ['user-delete', 'user-create'];
          console.log('promise3Data', promise3Data);
          // promise zinciri son halkasında sonuç dönüyor
          resolve(user);
        });
    });

    promiseWrap.then((response) => {
      console.log('promiseWrap', response);
    });

    // ayır çağırıldığı için her biri bağımsız bir şekilde işlendi sıra bozuldu.
    promise.then((p1) => {
      console.log('p1', p1);
    });

    promise2.then((p2) => {
      console.log('p2', p2);
    });

    Promise.resolve(5).then((p3) => {
      console.log('p3', p3);
    });

    // promise sonuçların tek bir seferde almak isterse bu durumda promise all kullanabiliriz. sonuç her zaman dizi olarak döner.
    // promise all promise chain ile benzer mantıkta çalışır.
    // promise.all ile promise tanımı yapılamaz sadece çağırılabilir.
    Promise.all([promise2, promise]).then((response) => {
      console.log('p-all', response);
    });

    // timer.then((count) => {
    //   console.log('count2', count);
    // });

    // resolve söz tutulduğunda döndürülür
    // reject ise söz tutulamadığında döndülür.

    // çağırma kısmı
    // promise
    //   .then((data: any) => {
    //     console.log('data', data); // resolve edilen veri
    //   })
    //   .catch((err) => {
    //     console.log('err', err); // verinin reject edildiği anı temsil eder
    //   })
    //   .finally(() => {
    //     console.log('işlem tamamlandı'); // resolve yada reject olup olmaması önemli olmayan durumlarda işlem bitiminde çalışan kod.
    //   });
  }
}
