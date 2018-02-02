import {
    observable,
    computed,
    action,
    useStrict
} from 'mobx';
import {
    Injectable
} from '@angular/core';
useStrict(true);
@Injectable()
export class MobxStore {
    @observable list: any[] = [];
    @computed get total(): any[] {
        return this.list;
    }
    @action add(item:any) {
        if(item){
            this.list.push(item);
        }
    }
    @action delete(index,n) {
        this.list.splice(index,n);
    }
}