import {
    Component,
    OnInit,
    OnChanges,
    OnDestroy
} from '@angular/core';

import {
    DobStores
} from '../dob';
@Component({
    selector: 'dobdemo-component',
    templateUrl: './dobdemo.component.html',
    styleUrls: ['./dobdemo.component.css']
})
export class DobdemoComponent implements OnInit {
    public name: string = '';
    public store: any;
    constructor(
        public dobStores: DobStores
    ) {
        this.store = this.dobStores.start();
    }
    public ngOnInit() {
        /*  */
    }
    public addGeneral() {
        if (this.name) {
            this.store!.BobAction!.addGeneral(this.name);
        } else {
            alert('请输入值');
        }
    }
    public addAsync(){
        if(this.name){
            alert('点击确定，3秒后将添加'+this.name+'数据');
            this.store!.BobAction!.addAsync(this.name);
        }else{
            alert('请输入值');
        }
    }
}