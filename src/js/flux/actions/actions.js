/*
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * TodoActions
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