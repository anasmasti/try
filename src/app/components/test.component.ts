import { Component, Input } from '@angular/core';

@Component({
  selector: 'test',
  template: '<h1>{{data.title | titlecase}}</h1>',
})
export class TestComponent {
  @Input() data: { title: string };

  constructor() {
    this.data = {
      title: '',
    };
  }
}
