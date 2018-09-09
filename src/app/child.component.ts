import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
            <button (click)="add()"> Add </button>
            <button (click)="sub()"> Sub </button>
  `// khi thực hiện event my_click
})
export class ChildComponent implements OnInit {
  @Output() my_click = new EventEmitter<boolean>(); // lấy giá trị của my_click

  add() {
    this.my_click.emit(true); // truy cập đến event (.emit để thực thi event)
  }

  sub() {
    this.my_click.emit(false); // truy cập đến event (.emit để thực thi event)
  }

  constructor() { }

  ngOnInit() {
  }

}
