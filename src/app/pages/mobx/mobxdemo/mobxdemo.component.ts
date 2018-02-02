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
    public addGeneral(){
        if(this.name){
            this.mobxStore.addGeneral(this.name);
        }else{
            alert('请输入值');
        }
    }
    public addAsync(){
        if(this.name){
            alert('点击确定，3秒后将添加'+this.name+'数据');
            this.mobxStore.addAsync(this.name);
        }else{
            alert('请输入值');
        }
    }
}