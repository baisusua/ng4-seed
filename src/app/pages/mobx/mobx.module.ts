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
} from './mobx.routes';
import {
    MobxComponent
} from './mobx.component';
import {
    MobxStore
} from './mobx';
@NgModule({
    declarations: [
        /**
         * Components / Directives/ Pipes
         */
        MobxComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        MobxAngularModule,
        ButtonModule,
        RouterModule.forChild(routes),
    ],
    providers: [MobxStore]
})
export class MobxModule {
    public static routes = routes;
}