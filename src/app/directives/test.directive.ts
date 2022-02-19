import { ThrowStmt } from '@angular/compiler';
import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appNgIfTest]',
})
export class TestDirective {
  // @HostListener('click') onClick: Function;
  @Input() set appNgIfTest(value: boolean) {
    if (value) {
      this.view.createEmbeddedView(this.template);
    } else {
      this.view.clear();
    }
  }

  constructor(
    private template: TemplateRef<any>,
    private view: ViewContainerRef
  ) {}

  createSomething() {
    // this.view.createEmbeddedView(this.template)
  }
}
