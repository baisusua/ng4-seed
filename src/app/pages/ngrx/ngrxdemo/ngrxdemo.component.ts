import {
    Component,
    OnInit,
} from '@angular/core';
import {
    Store
} from '@ngrx/store';
@Component({
    templateUrl: './ngrxdemo.component.html',
    styleUrls: ['./ngrxdemo.component.css']
})
export class NgrxDemoComponent implements OnInit {
    public name:string = '';
    constructor(
        public store$:Store<any>
    ) {
        /*  */
    }
    public ngOnInit() {
        console.log('ngrxDemo页面初始化完成');
    }
    public addGeneral(){
        this.store$.dispatch({
            type:'[Add] Data General',
            payload:{
                name:this.name,
                time:false
            }
        })
    }
    public addAsync(){
        alert('点击确定，3秒后将添加'+this.name+'数据');
        this.store$.dispatch({
            type:'[Add] Data Async',
            payload:{
                name:this.name,
                time:3000
            }
        })
    }
}