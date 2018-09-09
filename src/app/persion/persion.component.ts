import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-persion',
  templateUrl: './persion.component.html',
  styleUrls: ['./persion.component.css']
})
export class PersionComponent implements OnInit {
  @Input() age: number;
  @Output() my_click = new EventEmitter();

  delete (age) {
    this.my_click.emit(age);
  }
  constructor() { }

  ngOnInit() {
  }

}
