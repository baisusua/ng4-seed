import {
    Routes
} from '@angular/router';
import {
    IndexComponent
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
        path: 'detail/:id',
        component:DetailComponent
    },
    {
        path: '**',
        redirectTo: 'list',
        pathMatch: 'full'
    }
];