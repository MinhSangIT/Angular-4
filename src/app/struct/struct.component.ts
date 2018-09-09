import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-struct',
  templateUrl: './struct.component.html',
  styleUrls: ['./struct.component.css']
})
export class StructComponent implements OnInit {

  flage = true;
  en = '';
  vn = '';
  isshow = true;
  combobox = 'all';
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  arrWords = [
    { id: 1, en: 'action', vn: 'hành động', memorized: true },
    { id: 2, en: 'actor', vn: 'diễn viên', memorized: false },
    { id: 3, en: 'activity', vn: 'hoạt động', memorized: true },
    { id: 4, en: 'active', vn: 'chủ động', memorized: true },
    { id: 5, en: 'bath', vn: 'tắm', memorized: false },
    { id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true }
  ];
  even = { color: 'red' };
  odd = { color: 'blue' };

  checkchage(event) {
    const xem_all = this.combobox === 'all';
    const xem_thuoc = this.combobox === 'true' && event;
    const xem_chua_thuoc = this.combobox === 'false' && !event ;
    return xem_all || xem_thuoc || xem_chua_thuoc;
  }

  // changememorized(id) {
  //   id = this.arrWords.findIndex(img => img.id === id);
  //   this.id.
  // }
// #region bài 19 search cách làm trên google
  // data = [{
  //   'id' : 0,
  //   'en': '' + this.key.replace(/^"(.*)"$/, '$1'),
  //   'vn': '' + this.value.replace(/^"(.*)"$/, '$1'),
  //   'memorized': true
  // }];
  // add() {
  //   // Object.entries(this.arrWords).map(([en, vn]) => ({ this.key, this.value }));
  //   this.data.map(item => {
  //     return {
  //       id: item.id,
  //       en: item.en,
  //       vn: item.vn,
  //       memorized: item.memorized
  //     };
  //   }).forEach(item => this.arrWords.push(item));
  // }
// #endregion
  add() {
    this.arrWords.unshift({
      id: this.arrWords.length + 1,
      en: this.en,
      vn: this.vn,
      memorized: false
    });
    this.vn = '';
    this.en = '';
    this.isshow = !this.isshow;
  }

  Xoa(index) {
    index = this.arrWords.findIndex(img => img.id === index);
    this.arrWords.splice(index, 1);
  }

onchage() {
    this.flage = !this.flage;
  }
  constructor() { }

  ngOnInit() {
  }

}
