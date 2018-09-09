import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `<h3>{{ value }}</h3>
              <app-child (my_click)='event($event)'></app-child>
  `
})
export class ParentComponent implements OnInit {
  value = 0;

  event (isAdd) {
    isAdd ? this.value = this.value + 1 : this.value = this.value - 1;
  }
  constructor() { }

  ngOnInit() {
  }

}
