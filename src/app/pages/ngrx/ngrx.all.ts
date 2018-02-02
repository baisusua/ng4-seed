import {
    StoreModule,
    ActionReducer
} from '@ngrx/store';
import {
    EffectsModule
} from '@ngrx/effects';
import {
    StoreDevtoolsModule
} from '@ngrx/store-devtools';

import {
    NgrxEffect,
    NgrxReducer
} from './ngrx';

let imports = [
    StoreModule.forRoot({
        NgrxReducer
    }),
    EffectsModule.forRoot([
        NgrxEffect
    ])
]
if (module.hot) {
    imports.push(...[
        StoreDevtoolsModule.instrument({
            maxAge: 50
        })
    ])
}

export const APP_NGRX_IMPORT = imports;