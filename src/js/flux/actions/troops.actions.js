import ActionTypes from '../constants/constants';
import DispatcherSingleton from '../dispatcher/dispatcher';

function TroopsActions(dispatcher){
	return {
		/**
		 * Set troop lvl
		 */
		setTroopLvl: (id, lvl) => {
			DispatcherSingleton.dispatch({
				actionType: ActionTypes.LIGHT_TROOP_SET_LVL,
				id,
				lvl
			})
		}
	}
}

export default TroopsActions;