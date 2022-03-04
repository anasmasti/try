import { HttpClient } from '@angular/common/http';
import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  DoCheck,
  ElementRef,
  OnChanges,
  OnInit,
  SimpleChanges,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { justNumbersValidation } from '@validation/just-numbers.validation';
import { EMPTY, Observable, tap } from 'rxjs';
import { TestComponent } from './components/test.component';
import { TestDesorator } from './decorators/test.decorator';
import { DynamicDirective } from './directives/dynamic.directive';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  constructor() {}
}
