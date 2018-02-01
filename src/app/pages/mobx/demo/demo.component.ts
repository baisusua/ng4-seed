import {
    Component,
    OnInit,
} from '@angular/core';
@Component({
    selector: 'demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
    constructor() {
        /*  */
    }
    public ngOnInit() {
        console.log('mobxDemo页面初始化完成');
        /* 获取用户信息 */
    }

}