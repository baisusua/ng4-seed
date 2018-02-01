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
} from './ngrx.routes';
import {
    NgrxComponent
} from './ngrx.component';

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
        RouterModule.forChild(routes),
    ],
})
export class NgrxModule {
    public static routes = routes;
}