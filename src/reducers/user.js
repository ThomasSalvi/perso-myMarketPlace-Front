import { TOGGLE_MENU } from 'src/actions/user';
export const initialState = {
  isLogged: false,
  visibleSubmenu: false,
};
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return { 
        ...state,
        visibleSubmenu: !state.visibleSubmenu,
      }
    default:
      return state;
  }
};
export default reducer;
