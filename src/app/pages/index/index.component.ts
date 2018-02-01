import {
    Component,
    OnInit,
    ViewEncapsulation
} from '@angular/core';
import {
    StatusService
} from './status.service';
/**
 * Index Component
 * 顶层组件
 */
@Component({
    selector: 'app',
    encapsulation: ViewEncapsulation.None,
    /* 样式无封装 */
    styleUrls: [
        './index.component.css'
    ],
    templateUrl: './index.component.html'
})
export class IndexComponent implements OnInit {
    public childname: string = 'list组件';
    public isNgrx: boolean = false;
    public isMobx: boolean = true;
    constructor(
        public StatusService:StatusService
    ) {}

    public ngOnInit() {
        console.log('初始化Index组件');
        /* 检测是否允许跳转 */
        this.StatusService.change('ngrx',this.isNgrx);
        this.StatusService.change('mobx',this.isMobx);
    }
    public onIsNgrx(status) {
        this.isNgrx = !this.isNgrx;
        this.StatusService.change('ngrx',this.isNgrx);
    }
    public onIsMobx(status) {
        this.isMobx = !this.isMobx;
        this.StatusService.change('mobx',this.isMobx);
    }
}