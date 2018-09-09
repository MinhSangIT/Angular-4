import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <h3> {{ value }}</h3>
  `
})
export class ChildComponent implements OnInit {
  value = 0;
  constructor() { }

  ngOnInit() {
  }

}
