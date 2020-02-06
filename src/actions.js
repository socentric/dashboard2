export const SET_THEME = 'SetTheme';
export const SET_ACTIVE_WORKSPACE = 'SetWorkspace';
export const SHOW_SETTINGS = 'ShowSettings';
export const MINIMISE_NAV = 'MinimiseNav';
export const ADD_WORKSPACE = 'AddWorkspace';
export const REMOVE_WORKSPACE = 'RemoveWorkspace';
export const TOGGLE_NAVIGATION = 'ToggleNavigation';
export const SET_EXPANDED_QUOTE = 'SetExpandedQuote';

export const setTheme = shade => ({
  type: SET_THEME,
  shade
});

export const setActiveWorkspace = id => ({
  type: SET_ACTIVE_WORKSPACE,
  id
});

export const showSettings = shouldShow => ({
  type: SHOW_SETTINGS,
  shouldShow
});

export const minimiseNav = () => ({
  type: MINIMISE_NAV
});

export const addWorkspace = () => ({
  type: ADD_WORKSPACE
});

export const removeWorkspace = id => ({
  type: REMOVE_WORKSPACE,
  id
});

export const toggleNavigation = () => ({
  type: TOGGLE_NAVIGATION
});

export const setExpandedQuote = selectedIndex => ({
  type: SET_EXPANDED_QUOTE,
  selectedIndex
});
