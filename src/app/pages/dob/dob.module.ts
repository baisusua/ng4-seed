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
    ButtonModule
}from 'jpush-ui/button';

import {
    routes
} from './dob.routes';
import {
    DobComponent
} from './dob.component';
import {
    DobStores
} from './dob';
@NgModule({
    declarations: [
        /**
         * Components / Directives/ Pipes
         */
        DobComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ButtonModule,
        RouterModule.forChild(routes),
    ],
    providers: [DobStores]
})
export class DobModule {
    public static routes = routes;
}