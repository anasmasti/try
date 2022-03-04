import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'next',
  template:`next Page <a [routerLink]="['/']">back</a>`,
})
export class NextComponent {

  constructor() {}
}
