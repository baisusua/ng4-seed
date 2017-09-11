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

    public ngOnInit() {
        console.log('作者页面初始化完成');
        console.log('dddd');
    }

}