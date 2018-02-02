import {
    CommonModule
} from '@angular/common';
import {
    FormsModule
} from '@angular/forms';
import {
    NgModule
} from '@angular/core';
import {
    RouterModule
} from '@angular/router';
import {
    MobxAngularModule
} from 'mobx-angular';

import {
    ButtonModule
}from 'jpush-ui/button';

import {
    routes
} from './ngrx.routes';
import {
    NgrxComponent
} from './ngrx.component';
import {
    APP_NGRX_IMPORT
} from './ngrx.all';
@NgModule({
    declarations: [
        /**
         * Components / Directives/ Pipes
         */
        NgrxComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        MobxAngularModule,
        ButtonModule,
        RouterModule.forChild(routes),
        APP_NGRX_IMPORT
    ]
})
export class NgrxModule {
    public static routes = routes;
}