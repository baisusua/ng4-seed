import {
    Component,
    OnInit,
} from '@angular/core';
import{
    MobxStore
} from './mobx';
@Component({
    selector: 'mobx',
    templateUrl: './mobx.component.html',
    styleUrls: ['./mobx.component.css']
})
export class MobxComponent implements OnInit {
    constructor(
        public mobxStore: MobxStore
    ){
        /*  */
    }
    public ngOnInit() {
        console.log('mobx页面初始化完成');
    }
    public delete(start){
        this.mobxStore.delete(start,1);
    }
}
