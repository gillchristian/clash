import angular from 'angular';

import AppActions from './actions/app.actions';
import StoreSingleton from './stores/example.store';
//import DispatcherSingleton from './dispatcher/dispatcher';

let ngFlux = angular.module('ngFlux', [])
	.factory('AppActions', AppActions)
	.factory('StoreSingleton', StoreSingleton);

export default ngFlux;