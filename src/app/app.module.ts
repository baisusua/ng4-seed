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
    ENV_PROVIDERS
} from './environment';
import {
    ROUTES
} from './app.routes';
// App is our top level component
import {
    IndexComponent
} from './pages/index';
import {
    NoContentComponent
} from './pages/no-content';
import {
    AppService,
    InternalStateType
} from './app.service';

interface StoreType {
    restoreInputValues: () => void;
    disposeOldHosts: () => void;
}
/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
    bootstrap: [IndexComponent],
    declarations: [
        IndexComponent,
        NoContentComponent
    ],
    /**
     * Import Angular's modules.
     */
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(ROUTES, {
            useHash: true,
            preloadingStrategy: PreloadAllModules
        })
    ],
    /**
     * Expose our Services and Providers into Angular's dependency injection.
     */
    providers: [
        ENV_PROVIDERS,
        AppService
    ]
})
export class AppModule {
}