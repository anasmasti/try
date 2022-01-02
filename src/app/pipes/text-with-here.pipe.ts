import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textWithHere',
})
export default class TextWithHerePipe implements PipeTransform {
  result: string;
  constructor() {
    this.result = '';
  }
  transform(text: string) {
    this.result = `${text} here`;
    return this.result;
  }
}
