import {
    Component,
    OnInit,
} from '@angular/core';
@Component({
    selector: 'books',
    templateUrl: './books.component.html',
    styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
    public list: any[] = [{
        name:'book'
    },{
        name:'book'
    },{
        name:'book'
    },{
        name:'book'
    },{
        name:'book'
    },{
        name:'book'
    },{
        name:'book'
    },{
        name:'book'
    },{
        name:'book'
    }];
    constructor() {
        /*  */
    }
    public ngOnInit() {
        console.log('书籍列表初始化完成');
        /* 获取用户信息 */
    }

}