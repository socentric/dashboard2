import { getDefaultWorkspace, workspaces } from './model/workspaces';
import { columnIds, columnSettings, rfq1, rfq2, rfq3, rfq4 } from './model/rfqs';
import { 
  TOGGLE_NAVIGATION,
  SET_THEME, 
  SET_ACTIVE_WORKSPACE, 
  SHOW_SETTINGS, 
  MINIMISE_NAV, 
  ADD_WORKSPACE, 
  REMOVE_WORKSPACE,
  SET_EXPANDED_QUOTE
} from './actions';

const initialState = {
  showNavigation: true,
  theme: 'dark',
  showSettings: false,
  minimiseNav: true,
  activeWorkspace: 'test',
  workspaces,
  rfqs: {
    columnIds,
    columnSettings,
    quotes: [rfq3, rfq2, rfq3, rfq2, rfq1, rfq3, rfq2, rfq3, rfq2, rfq4]
  },
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_NAVIGATION:
      return {
        ...state,
        showNavigation: !state.showNavigation
      };
    case SET_THEME:
      return {
        ...state,
        theme: action.shade 
      };
    case SET_ACTIVE_WORKSPACE:
      return {
        ...state,
        activeWorkspace: action.id 
      };
    case SHOW_SETTINGS:
      return {
        ...state,
        showSettings: action.shouldShow 
      };
    case MINIMISE_NAV:
      return {
        ...state,
        minimiseNav: !state.minimiseNav
      };
    case ADD_WORKSPACE:
        const id = `new${state.workspaces.length}`;
        return {
          ...state,
          minimiseNav: false,
          activeWorkspace: id,
          workspaces: [...state.workspaces, getDefaultWorkspace(id)]
        };
    case REMOVE_WORKSPACE:
      const workspaces = state.workspaces.filter(workspace => workspace.id !== action.id);
      const activeWorkspace = workspaces[workspaces.length-1].id;
      return {
        ...state,
        workspaces,
        activeWorkspace,
      };
    case SET_EXPANDED_QUOTE:
      return {
        ...state,
        rfqs: {
          ...state.rfqs,
          quotes: state.rfqs.quotes.map((quote, index) => {
            if(index === action.selectedIndex) {
              quote.isExpanded = !quote.isExpanded;
            }
            return quote;
          })
        }
      };
    default:
      return state;
  }
}

export default appReducer;