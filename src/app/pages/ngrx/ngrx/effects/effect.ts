import {
    Injectable
} from '@angular/core';
import {
    Effect,
    Actions
} from '@ngrx/effects';
import {
    Action
} from '@ngrx/store';
import {
    Observable
} from 'rxjs/Observable';
import * as Model from '../actions';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class NgrxEffect {
    @Effect()
    public List$: Observable < any > = this.actions$
        .ofType(Model.ADD_DATA_ASYNC)
        .map((action:Model.GetDataAction) => action.payload)
        .switchMap((payload) => {
            const delay:any = payload.time;
            return Observable.of({
                type: Model.GET_LAST_DATA,
                payload: payload.name
            }).delay(delay)
        });
    constructor(public actions$: Actions) {}
}