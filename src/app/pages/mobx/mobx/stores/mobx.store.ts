import {
    observable,
    computed,
    action,
    useStrict,
    runInAction
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
    @action addGeneral(item:any) {
        if(item){
            this.list.push(item);
        }
    }
    @action async addAsync(item:any) {
        if(item){
            try{
                const name = await this.asyncMethod(item);
                runInAction(() => {
                    this.list.push(name);
                })
            }catch(error){
                console.log(error)
            }
        }
    }
    @action delete(index,n) {
        this.list.splice(index,n);
    }
    public asyncMethod(name):Promise<any>{
        return new Promise(resolve=> {
            setTimeout(()=>{
                resolve(name);
            },3000)
        })
    }
}