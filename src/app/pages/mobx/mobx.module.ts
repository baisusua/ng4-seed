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
    routes
} from './mobx.routes';
import {
    MobxComponent
} from './mobx.component';

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
        RouterModule.forChild(routes),
    ],
})
export class MobxModule {
    public static routes = routes;
}