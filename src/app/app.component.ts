import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { justNumbersValidation } from '@validation/just-numbers.validation';
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

export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('getRef') getRef!: ElementRef<any>;
  dataForm!: FormGroup;
  dataToShow: any[];

  constructor(private fb: FormBuilder, private dataService: DataService) {
    this.dataForm = this.fb.group({
      id: this.fb.control('', [Validators.required, justNumbersValidation()]),
      name: this.fb.control(''),
    });
    this.dataToShow = [];
  }

  ngOnInit(): void {
    this.getDataFromService();
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

  ngAfterViewInit(): void {
    console.log(this.dataForm);
  }

  get id() {
    return this.dataForm.controls['id'];
  }

  get name() {
    return this.dataForm.controls['name'];
  }
}
