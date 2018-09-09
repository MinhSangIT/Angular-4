import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-persion',
  templateUrl: './list-persion.component.html',
  styleUrls: ['./list-persion.component.css']
})

export class ListPersionComponent implements OnInit {

  arrPeople = [
    {name: 'Sang', age: 12},
    {name: 'Teo', age: 17},
    {name: 'Ti', age: 18}
  ];

  event (value) {
    const index = this.arrPeople.findIndex(img => img.age === value);
    this.arrPeople.splice(index, 1);
  }
  constructor() { }

  ngOnInit() {
  }

}
