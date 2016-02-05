import ActionTypes from '../constants/constants';
import DispatcherSingleton from '../dispatcher/dispatcher';

function AppActions(dispatcher){
	return {
		/**
		 * Some action
		 */
		someAction: value => {
			DispatcherSingleton.dispatch({
				actionType: ActionTypes.SOME_ACTION,
				value
			})
		}
	}
}

export default AppActions;