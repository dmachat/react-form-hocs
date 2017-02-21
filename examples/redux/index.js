import { combineReducers } from 'redux';

const actions = {
  SAVE: 'SAVE',
};

export const saveValues = obj => ({ type: actions.SAVE, values: obj });

function values(state = {}, action) {
  switch (action.type) {
    case actions.SAVE:
      // just saving to redux store here, but you could use an async action to POST values
      return Object.assign({}, state, action.values);
    default:
      return state;
  }
}

export default combineReducers({
  values,
});
