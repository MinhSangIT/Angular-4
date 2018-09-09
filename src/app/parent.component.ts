import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from './child.component';

@Component({
  selector: 'app-parent',
  template: `
    <button (click)="add()">ADD</button>
    <app-child></app-child>
  `
})
export class ParentComponent implements OnInit {
  @ViewChild(ChildComponent)
  object: ChildComponent; // object đại diện cho all param trong ChildComponent

  add() {
    this.object.value++;
  }
  constructor() { }

  ngOnInit() {
  }

}

// không sử dụng viewchild
// <button (click)="mychild.value = mychild.value +1">ADD</button>
//     <app-child #mychild></app-child>
// mychild là object đại diện cho all param trong ChildComponent

