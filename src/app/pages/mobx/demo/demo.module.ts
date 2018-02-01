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
} from './demo.routes';
import {
    DemoComponent
} from './demo.component';

/* 页面服务部分 */

@NgModule({
    declarations: [
        /**
         * Components / Directives/ Pipes
         */
        DemoComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes)
    ]
})
export class MobxDemoModule {
    public static routes = routes;
}