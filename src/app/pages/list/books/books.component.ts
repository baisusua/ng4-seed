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
    public list: any[] = [];
    public name: string = '书列表';
    constructor() {
        /*  */
    }
    public ngOnInit() {
        console.log('作者页面初始化完成');
        /* 获取用户信息 */
    }

}