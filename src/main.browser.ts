/**
 * Angular bootstrapping
 */
import {
	platformBrowserDynamic
} from '@angular/platform-browser-dynamic';
import {
	environment
} from 'environments/environment';

/**
 * App Module
 * our top level module that holds all of our components
 */
import {
	AppModule
} from './app';

/**
 * Bootstrap our Angular app with a top level NgModule
 */
declare var module: any;
if ('local' === process.env.ENV) {
	if (module.hot) {
		module.hot.accept();
		module.hot.dispose(() => {
			let styles = document.head.querySelectorAll('style');
			for (let i = 0, len = styles.length; i++; i < len) {
				if (styles[i].innerText.indexOf('_ng') >= 0) {
					styles[i].remove();
					styles[i] = null;
				}
			}
		});
	}
}

export function main(): Promise < any > {
	return platformBrowserDynamic()
		.bootstrapModule(AppModule)
		.then(environment.decorateModuleRef)
		.catch((err) => console.error(err));
}

/**
 * Needed for hmr
 * in prod this is replace for document ready
 */
switch (document.readyState) {
	case 'loading':
		document.addEventListener('DOMContentLoaded', _domReadyHandler, false);
		break;
	case 'interactive':
	case 'complete':
	default:
		main();
}

function _domReadyHandler() {
	document.removeEventListener('DOMContentLoaded', _domReadyHandler, false);
	main();
}