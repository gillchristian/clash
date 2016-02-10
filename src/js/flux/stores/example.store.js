import Store from './store';
import DispatcherSingleton from '../dispatcher/dispatcher';
import ActionTypes from '../constants/constants';

/**
 * Define the store with its methods 
 */
class SomeStore extends Store {

  constructor() {
    super();
  }

  /**
   * State getter
   */
  getState() {
  	return {someState: 'sarasa'};
  }

}

let StoreInstance = new SomeStore();

/**
 * Register an instance of the store to the dispatcher
 */
StoreInstance.dispatchToken = DispatcherSingleton.register(action => {
	
  /**
   * Act according to the actions required by the app
   */
  switch(action.type) {
    /**
     * Compares the persons by age
     */
    case ActionTypes.SOME_ACTION:
      StoreInstance.emitChange();
      break;
  }
});

/**
 * Create the factory function 
 * 
 * exposes an API to the ngApp
 */
let StoreSingleton = function () {
  return {
    getState: () => StoreInstance.getState()
  }
}
export default StoreSingleton;