import {
    Component,
    OnInit,
    OnChanges,
    OnDestroy
} from '@angular/core';
import {
    observe
} from 'dob';
import {
    DobStores
} from './dob';
@Component({
    selector: 'dob-component',
    templateUrl: './dob.component.html',
    styleUrls: ['./dob.component.css']
})
export class DobComponent implements OnInit {
    public store: any;
    constructor(
        public dobStores: DobStores
    ) {
        this.store = this.dobStores.start();
    }
    public ngOnInit() {
        /*  */
        observe((e) => {
            console.log(e);
            // this.list = this.store!.BobStore!.list;
            console.log('store发生改变')
        })
    }
    public delete(start) {
        this.store!.BobAction!.delete(start, 1);
    }
}