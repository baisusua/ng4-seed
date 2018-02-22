import {
    Routes
} from '@angular/router';
import {
    IndexComponent,
    CheckService
} from './pages/index';
import {
    DetailComponent
}from './pages/detail';
import {
    NoContentComponent
} from './pages/no-content';

import {
    DataResolver
} from './app.resolver';

export const ROUTES: Routes = [{
        path: 'list',
        loadChildren: './pages/list#ListModule'
    },
    {
        path: 'ngrx',
        canActivate: [CheckService],
        loadChildren: './pages/ngrx#NgrxModule'
    },
    {
        path: 'mobx',
        canActivate: [CheckService],
        loadChildren: './pages/mobx#MobxModule'
    },
    {
        path: 'dob',
        loadChildren: './pages/dob#DobModule'
    },
    {
        path: 'detail/:id',
        component:DetailComponent
    },
    {
        path: '**',
        redirectTo: 'list',
        pathMatch: 'full'
    }
];