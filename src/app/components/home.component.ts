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
import { TestDesorator } from 'app/decorators/test.decorator';
import { DynamicDirective } from 'app/directives/dynamic.directive';
import { DataService } from 'app/services/data.service';
import { EMPTY, Observable, tap } from 'rxjs';
import { TestComponent } from './test.component';
import * as localPosts from 'assets/api/post.json';

const useDataService = (http: HttpClient) => {
  return new DataService(http);
};

let useDataServiceProvider = {
  provide: DataService,
  useFactory: useDataService,
  deps: [HttpClient],
};

@Component({
  selector: 'app-root',
  template: `<h1 #getRef>test</h1>
    <a [routerLink]="['/next']">next</a>
    <test [posts$]="posts$"> </test>

    <form [formGroup]="dataForm" (submit)="addPost()">
      <input type="text" formControlName="id" placeholder="id" />
      <span *ngIf="id.hasError('justNumberError')">{{
        'just number error' | textWithHere
      }}</span>
      <span *ngIf="id.hasError('required')">{{ 'required' | titlecase }}</span>
      <input type="text" formControlName="title" placeholder="title" />
      <input type="submit" value="Add post" />
    </form>

    <ng-container *ngFor="let data of dataToShow">
      <h1>{{ data.name }}</h1>
    </ng-container>
    <div *appNgIfTest="true">Dive here</div>
    <ng-template appDynamic></ng-template>

    <button (click)="generateComponent()">
      {{ 'generate Component' | titlecase }}
    </button>
    <button (click)="removeComponent()">
      {{ 'remove Component' | titlecase }}
    </button>`,
  providers: [useDataServiceProvider],
})
@TestDesorator({
  name: 'data',
})
export class HomeComponent implements OnInit, DoCheck {
  @ViewChild(DynamicDirective, { static: true }) targetDiv!: DynamicDirective;

  dataForm!: FormGroup;
  dataToShow: any[];
  testValue: any;
  component: any;
  posts$: Observable<any>;
  posts: any[] = (localPosts as any).default;

  constructor(private fb: FormBuilder, private dataService: DataService) {
    this.dataForm = this.fb.group({
      id: this.fb.control('', [Validators.required, justNumbersValidation()]),
      title: this.fb.control(''),
    });
    this.dataToShow = [];
    this.testValue = 'test';
    this.posts$ = EMPTY;
  }

  ngOnInit(): void {
    // this.getDataFromService();
    this.doSomething();
    this.posts$ = this.getPosts();
    this.posts.forEach((post) => {
      console.log(`${post.id}`);
    });
  }

  ngDoCheck(): void {
    this.component = this.targetDiv.view.createComponent(TestComponent);
  }

  // getDataFromService() {
  //   this.dataService.getData().subscribe((data) => {
  //     this.dataToShow = data;
  //   });
  // }

  // postData() {
  //   this.dataService.postData();
  //   setTimeout(() => {
  //     this.dataForm.reset();
  //   }, 1000);
  // }

  getPosts() {
    return this.dataService.getDataFromApi();
  }

  addPost() {
    let post = this.dataForm.value;
    return this.dataService.postDataFromApi(post).subscribe({
      next: (_) => this.dataForm.reset(),
    });
  }

  generateComponent(): void {
    this.component.instance.data = {
      title: 'test component',
    };
  }

  removeComponent(): void {
    this.component.destroy();
  }

  doSomething() {}

  get id() {
    return this.dataForm.controls['id'];
  }

  get name() {
    return this.dataForm.controls['name'];
  }
}
