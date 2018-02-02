import {
    Component,
    OnInit,
} from '@angular/core';
import{
    MobxStore
} from '../mobx'
@Component({
    templateUrl: './mobxdemo.component.html',
    styleUrls: ['./mobxdemo.component.css']
})
export class MobxDemoComponent implements OnInit {
    public name:string = '';
    constructor(
        public mobxStore:MobxStore
    ) {
        /*  */
    }
    public ngOnInit() {
        console.log('mobxDemo页面初始化完成');
        /* 获取用户信息 */
    }
    public add(){
        if(this.name){
            this.mobxStore.add(this.name);
        }else{
            alert('请输入值');
        }
    }
}