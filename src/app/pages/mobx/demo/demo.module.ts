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
import{
    InputModule
}from'jpush-ui/input';
import{
    ButtonModule
}from'jpush-ui/button'
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
        InputModule,
        ButtonModule,
        RouterModule.forChild(routes)
    ]
})
export class MobxDemoModule {
    public static routes = routes;
}