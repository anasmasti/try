import { Injectable } from '@angular/core';
import { from, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  data: any[];

  constructor() {
    this.data = [
      { id: 1, name: 'anas' },
      { id: 2, name: 'anas2' },
      { id: 3, name: 'anas3' },
      { id: 4, name: 'anas4' },
      { id: 5, name: 'anas5' },
    ];
  }

  getData(): Observable<any> {
    let dataToSend = from([this.data]);
    return dataToSend;
  }

  postData() {
    console.log('data posted');
  }
}
