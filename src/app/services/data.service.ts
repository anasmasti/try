import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  EMPTY,
  from,
  map,
  Observable,
  shareReplay,
  startWith,
  tap,
} from 'rxjs';

@Injectable()
export class DataService {
  data: any[];
  headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.data = [
      { id: 1, name: 'anas' },
      { id: 2, name: 'anas2' },
      { id: 3, name: 'anas3' },
      { id: 4, name: 'anas4' },
      { id: 5, name: 'anas5' },
    ];
    this.headers = new HttpHeaders({
      'content-type': 'application/json',
    });
  }

  getData(): Observable<any> {
    let dataToSend = from([this.data]);
    return dataToSend;
  }

  getDataFromApi(): Observable<any> {
 
     return this.http
        .get('http://localhost:3000/posts')
        .pipe(
          shareReplay(1),
        )
    }
    


  postDataFromApi(post: any): Observable<any> {
    let body = JSON.stringify(post);
    return this.http.post('http://localhost:3000/posts', body, {
      headers: this.headers,
    });
  }
}
