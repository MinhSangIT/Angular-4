import { Component } from '@angular/core'; // chiếc xuất ra thuộc tính component, class component từ thư viện angular core

// decorator (cung cấp cho angular biết một số thông tin quan trong của component này là gì)
@Component({// là một function, truyền vào một object có các thuộc tính
    templateUrl: './new.component.html', // thuộc tính thứ nhất
    selector: 'app-word', // thuộc tình thứ 2 (là một html do mình tạo ra)
    styleUrls: ['./new.component.css']
})

// tslint:disable-next-line:class-name
// tslint:disable-next-line:component-class-suffix
// tslint:disable-next-line:class-name
export class wordsang_Component {
    en = 'Hello';
    vi = 'xin chao';
    name = '';
    even = { color: 'red' };
    odd = { color: 'blue' };
    flage = false;
    current = { tron : this.flage, vuong : !this.flage };
    image = 'https://v4.angular.io/assets/images/logos/angular/logo-nav@2x.png';
    change() {
        this.flage = !this.flage;
    }
} // export ra cho các file khác cùng xài


// đã định nghĩa thành công ra một component mới
