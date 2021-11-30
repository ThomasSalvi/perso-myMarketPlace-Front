export const TOGGLE_MENU = 'TOGGLE_MENU';
export const toggleMenu = () => ({
  type: TOGGLE_MENU,
});
export const CHANGE_PANEL = 'CHANGE_PANEL';
export const changePanel = (value) => ({
  type: CHANGE_PANEL,
  value: value,
});
export const CONNECT_INPUT_CHANGE = 'CONNECT_INPUT_CHANGE';
export const connectInputChange = (target, value) => ({
  type: CONNECT_INPUT_CHANGE,
  target: target,
  value: value,
});
export const NEW_USER = 'NEW_USER';
export const newUser = () => ({
  type: NEW_USER,
});
export const GEt_ALL_POSTS = 'GEt_ALL_POSTS';

export const getAllPosts = () => ({
  type: GEt_ALL_POSTS,
});
export const SAVE_ALL_POSTS = 'SAVE_ALL_POSTS';
export const saveAllPosts = (data) => ({
  type: SAVE_ALL_POSTS,
  value: data,
});
export const LOGIN = 'LOGIN';

export const login = () => ({
  type: LOGIN,
});
export const SAVE_USER = 'SAVE_USER';

export const saveUser = (data) => ({
  type: SAVE_USER,
  value: data,
});
export const LOG_OUT = 'LOG_OUT';

export const logOut = () => ({
  type: LOG_OUT,
});
export const OBJECT_INPUT = 'OBJECT_INPUT';

export const objectInput = (target, value) => ({
  type: OBJECT_INPUT,
  target: target,
  value: value,
});
export const SUBMIT_NEW_OBJECT = 'SUBMIT_NEW_OBJECT';

export const submitNewObject = () => ({
  type: SUBMIT_NEW_OBJECT,
});
export const DELETE_OBJECT = 'DELETE_OBJECT';

export const deleteObject = (id) => ({
  type: DELETE_OBJECT,
  value: id,
});
export const REDIRECT_URL = 'REDIRECT_URL';
export const redirectUrl = (value) => ({
  type: REDIRECT_URL,
  value: value,
});
export const STOP_REDIRECT = 'STOP_REDIRECT';

export const stopRedirect = () => ({
  type: STOP_REDIRECT,
});
export const FIND_OWNER = 'FIND_OWNER';

export const findOwner = (id) => ({
  type: FIND_OWNER,
  value: id,
});
export const SAVE_OWNER = 'SAVE_OWNER';

export const saveOwner = (value) => ({
  type: SAVE_OWNER,
  value: value,
});
export const TOGGLE_EDIT = 'TOGGLE_EDIT';

export const toggleEditForm = () => ({
  type: TOGGLE_EDIT,
});
export const EDIT_PROFIL = 'EDIT_PROFIL';

export const editProfil = (target, value) => ({
  type: EDIT_PROFIL,
  target: target,
  value: value,
});
export const EDIT_SUBMIT = 'EDIT_SUBMIT';

export const editSubmit = () => ({
  type: EDIT_SUBMIT,
});
export const TOGGLE_SUBMIT_PROFIL = 'TOGGLE_SUBMIT_PROFIL';

export const toggleProfilSubmit = () => ({
  type: TOGGLE_SUBMIT_PROFIL,
  
});
