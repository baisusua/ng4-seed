import {
    Injectable
} from '@angular/core';

import {
    Observable
} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class StatusService {
    public config: any = new Object();
    public change(name: string,status: boolean) {
        this.config[name] = status;
    }
    public find(name:string):boolean{
        return this.config[name]?true:false;
    }
}