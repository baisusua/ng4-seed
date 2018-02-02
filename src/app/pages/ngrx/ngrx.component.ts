import {
    Component,
    OnInit,
    OnDestroy
} from '@angular/core';

import {
    Store
} from '@ngrx/store';
import 'rxjs/add/operator/filter';
@Component({
    selector: 'ngrx',
    templateUrl: './ngrx.component.html',
    styleUrls: ['./ngrx.component.css']
})
export class NgrxComponent implements OnInit {
    public stream: any;
    public list:any[] = [];
    constructor(
        public store$: Store < any >
    ) {
        /*  */
    }
    public ngOnInit() {
        console.log('ngrx页面初始化完成');
        this.stream = this.store$.select('NgrxReducer')
            .filter(data => {
                return data&&data.list;
            }).subscribe((data:any) => {
                this.list = data.list;
            }, (error) => {
                console.log(error);
            });
    }
    public ngOnDestroy() {
        if (this.stream) {
            this.stream.unsubscribe();
        }
    }
    public delete(start){
        this.store$.dispatch({
            type:'[Delete] Data General',
            payload:{
                start:start
            }
        })
    }
}