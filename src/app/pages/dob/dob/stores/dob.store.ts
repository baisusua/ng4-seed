import {
    Action,
    combineStores,
    globalState,
    inject,
    isObservable,
    observable
} from 'dob';
import {
    Injectable
} from '@angular/core';
@observable
class BobStore {
    public list: any[] = [];
}

class BobAction {
    @inject(BobStore) public BobStore: BobStore
    @Action public addGeneral(item: any) {
        if (item) {
            this.BobStore.list.push(item);
        }
    }
    @Action async addAsync(item: any) {
        if (item) {
            const name = await this.asyncMethod(item);
            this.BobStore.list.push(name);
        }
    }
    @Action public delete(index, n) {
        this.BobStore.list.splice(index, n);
    }
    public asyncMethod(name): Promise < any > {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(name);
            }, 3000)
        })
    }
}
const Stores = combineStores({
    BobStore,
    BobAction
});

@Injectable()
export class DobStores {
    public start() {
        return Stores;
    }
}