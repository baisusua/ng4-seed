import {
    MobxComponent
} from './mobx.component';

export const routes = [{
    path: '',
    component: MobxComponent,
    children: [{
        path: ''
    }, {
        path: 'demo',
        loadChildren: './mobxdemo#MobxDemoModule'
    }]
}];