import * as Model from '../actions';

interface State {
    list: any[]
};

const initState: State = {
    list: []
};

export function NgrxReducer(
    state = initState,
    action: Model.AddGeneralAction | Model.AddAsyncAction | Model.GetDataAction | Model.DeleteGeneralAction
): State | any {
    switch (action.type) {
        case Model.ADD_DATA_GENERAL:
            {
                if (action.payload) {
                    initState.list.push(action.payload.name);
                }
                return initState;
            }
        case Model.ADD_DATA_ASYNC:
            {
                return action.payload;
            }
        case Model.GET_LAST_DATA:
            {
                if (action.payload) {
                    initState.list.push(action.payload);
                }
                return initState;
            }
        case Model.DELETE_DATA_GENERAL:
            initState.list.splice(action.payload.start,1);
            return initState;
    }
}