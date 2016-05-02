import Store from './store';
import DispatcherSingleton from '../dispatcher/dispatcher';
import ActionTypes from '../constants/constants';

import UnitType from '../../classes/unittype.class';
import { lightTroops } from '../data/app.data';

/**
 * Define the store with its methods 
 */
class TroopsStoreClass extends Store {

  constructor() {
    super();
    this.type = new UnitType(...lightTroops);
  }

  /**
   * Troops state getter
   * 
   * @return {[Unit]}
   */
  getUnits() {
  	return this.type.units;
  }
  
  /**
   * Trainers state getter
   * 
   * @return {[Trainer]}
   */
  getTrainers() {
  	return this.type.trainers;
  }
  
  /**
   * Set unit lvl 
   */
  setUnitLvl(id, lvl){
    this.type.trainers[id].setLvl(lvl);
  }
  
  /**
   * Set unit amount 
   */
  setUnitAmount(id, amount){
    this.type.trainers[id].amount = amount;
  }
}

let TroopsStoreInstance = new TroopsStoreClass();

/**
 * Register an instance of the store to the dispatcher
 */
TroopsStoreInstance.dispatchToken = DispatcherSingleton.register(action => {
	
  /**
   * Act according to the actions required by the app
   */
  switch(action.actionType) {
    /**
     * Compares the persons by age
     */
    case ActionTypes.LIGHT_TROOP_SET_LVL:
      TroopsStoreInstance.setUnitLvl(action.id, action.lvl);
      TroopsStoreInstance.emitChange();
      break;
  }
});

/**
 * Create the factory function 
 * 
 * exposes an API to the ngApp
 */
let TroopsStore = function () {
  return {
    getUnits: () => TroopsStoreInstance.getUnits(),
    getTrainers: () => TroopsStoreInstance.getTrainers(),
  }
}
export default TroopsStore;