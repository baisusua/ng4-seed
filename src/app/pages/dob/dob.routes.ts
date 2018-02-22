import {
    DobComponent
} from './dob.component';

export const routes = [{
    path: '',
    component: DobComponent,
    children: [{
        path: ''
    }, {
        path: 'demo',
        loadChildren: './dobdemo#DobDemoModule'
    }]
}];