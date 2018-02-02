import {
    Action
} from '@ngrx/store';

import {
    StartModel,
    DeleteModel
} from '../models';

export const ADD_DATA_GENERAL = '[Add] Data General';

export class AddGeneralAction implements Action {
    public readonly type = ADD_DATA_GENERAL;
    constructor(public payload: StartModel) {
        /*  */
    }
}

export const ADD_DATA_ASYNC = '[Add] Data Async';

export class AddAsyncAction implements Action {
    public readonly type = ADD_DATA_ASYNC;
    constructor(public payload: StartModel) {
        /*  */
    }
}

export const GET_LAST_DATA = '[Get] Last Data';

export class GetDataAction implements Action {
    public readonly type = GET_LAST_DATA;
    constructor(public payload: StartModel) {
        /*  */
    }
}

export const DELETE_DATA_GENERAL = '[Delete] Data General';

export class DeleteGeneralAction implements Action {
    public readonly type = DELETE_DATA_GENERAL;
    constructor(public payload: DeleteModel) {
        /*  */
    }
}


