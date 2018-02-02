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
} from './ngrxdemo.routes';
import {
    NgrxDemoComponent
} from './ngrxdemo.component';

/* 页面服务部分 */

@NgModule({
    declarations: [
        /**
         * Components / Directives/ Pipes
         */
        NgrxDemoComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        InputModule,
        ButtonModule,
        RouterModule.forChild(routes)
    ]
})
export class NgrxDemoModule {
    public static routes = routes;
}