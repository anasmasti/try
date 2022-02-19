import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'app/services/data.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'test',
  template:`<h1 *ngFor="let post of (posts$ | async) as posts ">{{post.title}}</h1>
  `,
})
export class TestComponent {
  @Input() posts$: Observable<any>;

  constructor(private dataService: DataService) {
    this.posts$ = of();
  }
}
