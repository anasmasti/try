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
import { TestComponent } from './components/test.component';
import { TestDesorator } from './decorators/test.decorator';
import { DynamicDirective } from './directives/dynamic.directive';
import { DataService } from './services/data.service';

const useDataService = () => {
  return new DataService();
};

let useDataServiceProvider = {
  provide: DataService,
  useFactory: useDataService,
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [useDataServiceProvider],
})
@TestDesorator({
  name: 'data',
})
export class AppComponent implements OnInit, DoCheck {
  @ViewChild(DynamicDirective, { static: true }) targetDiv!: DynamicDirective;

  dataForm!: FormGroup;
  dataToShow: any[];
  testValue: any;
  component: any;

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
  ) {
    this.dataForm = this.fb.group({
      id: this.fb.control('', [Validators.required, justNumbersValidation()]),
      name: this.fb.control(''),
    });
    this.dataToShow = [];
    this.testValue = 'test';
  }

  ngOnInit(): void {
    this.getDataFromService();
    this.doSomething();
  }


  ngDoCheck(): void {
    console.log('docheck');
    
    this.component = this.targetDiv.view.createComponent(TestComponent);
  }

  getDataFromService() {
    this.dataService.getData().subscribe((data) => {
      this.dataToShow = data;
    });
  }

  postData() {
    this.dataService.postData();
    setTimeout(() => {
      this.dataForm.reset();
    }, 1000);
  }

  generateComponent(): void {
    
   this.component.instance.data = {
     title: 'test component'
   }
  }

  removeComponent(): void {

    this.component.destroy()
  }

  doSomething() {}

  get id() {
    return this.dataForm.controls['id'];
  }

  get name() {
    return this.dataForm.controls['name'];
  }
}
