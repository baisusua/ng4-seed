import {
    Component,
    OnInit,
    ChangeDetectionStrategy
} from '@angular/core';
import {
    MobxStore
} from './mobx';
import {
    observe
} from 'mobx';
@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'mobx',
    templateUrl: './mobx.component.html',
    styleUrls: ['./mobx.component.css']
})
export class MobxComponent implements OnInit {
    constructor(
        public mobxStore: MobxStore
    ) {
        /*  */
    }
    public ngOnInit() {
        console.log('mobx页面初始化完成');
        // observe(this.mobxStore.list,(e) => {
        //     console.log(e);
        //     // this.list = this.store!.BobStore!.list;
        //     console.log('store发生了变化！');
        // })
    }
    public delete(start) {
        this.mobxStore.delete(start, 1);
    }
}