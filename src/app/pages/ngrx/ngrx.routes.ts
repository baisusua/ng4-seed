import {
    NgrxComponent
} from './ngrx.component';

export const routes = [{
    path: '',
    component: NgrxComponent,
    children: [{
        path: ''
    }, {
        path: 'demo',
        loadChildren: './demo#NgrxDemoModule'
    }]
}];