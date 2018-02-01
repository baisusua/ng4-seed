import {
    BrowserModule
} from '@angular/platform-browser';
import {
    FormsModule
} from '@angular/forms';
import {
    HttpModule
} from '@angular/http';
import {
    NgModule,
    ApplicationRef
} from '@angular/core';
import {
    RouterModule,
    PreloadAllModules
} from '@angular/router';

/*
 * Platform and Environment providers/directives/pipes
 */
import {
    AppService
} from './app.service';
import {
    ROUTES
} from './app.routes';

// App is our top level component
import {
    IndexComponent,
    CheckService,
    StatusService
} from './pages/index';
import {
    DetailComponent
} from './pages/detail';
import {
    NoContentComponent
} from './pages/no-content';

/* 
jpush-ui
*/
import {
    CheckboxModule
} from 'jpush-ui/checkbox';

/* 
static
*/
import '../styles/flex.css';
import "../styles/reset.css";


interface StoreType {
    restoreInputValues: () => void;
    disposeOldHosts: () => void;
}
@NgModule({
    bootstrap: [IndexComponent],
    declarations: [
        IndexComponent,
        DetailComponent,
        NoContentComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(ROUTES, {
            useHash: true,
            preloadingStrategy: PreloadAllModules
        }),
        CheckboxModule
    ],
    providers: [
        AppService,
        CheckService,
        StatusService
    ]
})
export class AppModule {}