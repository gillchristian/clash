/**
 * App actions
 */

import AppDispatcherSingleton from '../dispatcher/dispatcher';
import ActionTypes from '../constants/constants.js';

var AppActions = {

  /**
   * Compare action
   */
  compare: () => {
    AppDispatcherSingleton.dispatch({
      type: ActionTypes.PERSONS_COMPARE
    });
  },
	
  /**
   * Set reset placemet
   */
  reset: () => {
    AppDispatcherSingleton.dispatch({
      type: ActionTypes.PERSONS_RESET
    });
  },
  
  /**
   * Sort patriarchs by Age
   */
  sortByAge: () => {
    AppDispatcherSingleton.dispatch({
      type: ActionTypes.PERSONS_ORDER_BY_AGE
    });
  },
  
  /**
   * Show tooltip for hovered patriarch.
   * 
   * @param {int} id  patriarch id
   */
  showTooltip: (id) => {
    AppDispatcherSingleton.dispatch({
      type: ActionTypes.PERSONS_SHOW_TOOLTIP,
      id: id
    });
  },


  /**
   * Hide tooltip for not-hovered patriarch.
   * 
   * @param {int} id  patriarch id
   */
  hideTooltip: (id) => {
    AppDispatcherSingleton.dispatch({
      type: ActionTypes.PERSONS_HIDE_TOOLTIP,
      id: id
    });
  }

};

export default AppActions;