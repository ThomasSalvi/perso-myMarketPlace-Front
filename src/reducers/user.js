import { CHANGE_PANEL, TOGGLE_SUBMIT_PROFIL, EDIT_PROFIL, TOGGLE_EDIT, SAVE_OWNER, STOP_REDIRECT, REDIRECT_URL, OBJECT_INPUT, CONNECT_INPUT_CHANGE, TOGGLE_MENU, SAVE_ALL_POSTS, SAVE_USER, LOG_OUT } from 'src/actions/user';

const userStorage = JSON.parse(localStorage.getItem('user'));
let userVerif;
let userIdStorage;
let userNameStorage;
let tokenStorage;
let userEmailStorage;
{userStorage == undefined ? userVerif=false : userVerif=true};
{userStorage == undefined ? userIdStorage='' : userIdStorage=userStorage.userId}
{userStorage == undefined ? tokenStorage='' : tokenStorage=userStorage.token}
{userStorage == undefined ? userNameStorage='anonyme' : userNameStorage=userStorage.userName}
{userStorage == undefined ? userEmailStorage='anonyme' : userEmailStorage=userStorage.userEmail}

export const initialState = {
  isLogged: userVerif,
  visibleSubmenu: false,
  panel: 1,
  email: userEmailStorage,
  password: '',
  newEmail: '',
  newPassword: '',
  prenom: '',
  profilSubmit: false,
  posts: [],
  token: tokenStorage,
  userName: userNameStorage,
  userId: userIdStorage,
  redirectUrl: false,
  owner: 'anonyme',
  editForm: false,
  newObjects: {
    title: '',
    desc: '',
    price: '',
    picture: '',
  },
  editName: userNameStorage,
  editEmail: userEmailStorage,
};
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case EDIT_PROFIL:
      if (action.target == 'nom') {
        return {
          ...state,
          editName: action.value,
        };
      }
      return {
        ...state,
        editEmail: action.value,
      };
    case TOGGLE_SUBMIT_PROFIL:
      return {
        ...state,
        profilSubmit: !state.profilSubmit,
      }
    case TOGGLE_MENU:
      return {
        ...state,
        visibleSubmenu: !state.visibleSubmenu,
      };
    case TOGGLE_EDIT:
      return {
        ...state,
        editForm: !state.editForm,
      }
    case SAVE_OWNER:
      return {
        ...state,
        owner: action.value,
      };
    case SAVE_ALL_POSTS:
      return {
        ...state,
        posts: action.value,
      };
    case REDIRECT_URL:
      return {
        ...state,
        redirectUrl: true,
      }
    case LOG_OUT:
      return {
        ...state,
        userName: '',
        isLogged: false,
      };
    case CHANGE_PANEL:
      return {
        ...state,
        panel: action.value,
      };
    case STOP_REDIRECT:
      return {
        ...state,
        redirectUrl: false,
      }
    case OBJECT_INPUT:
      switch (action.target) {
        case 'title':
          return {
            ...state,
            newObjects: {
              ...state.newObjects,
              title: action.value,
            },
          };
        case 'desc':
          return {
            ...state,
            newObjects: {
              ...state.newObjects,
              desc: action.value,
            },
          };
        case 'price':
          return {
            ...state,
            newObjects: {
              ...state.newObjects,
              price: action.value,
            },
          };
        case 'picture':
          return {
            ...state,
            newObjects: {
              ...state.newObjects,
              picture: action.value,
            },
          };
        default:
          return {
            ...state,
          };
      }
    case SAVE_USER:
      return {
        ...state,
        token: action.value.token,
        userName: action.value.userName,
        userId: action.value.userId,
        isLogged: true,
      }
    case CONNECT_INPUT_CHANGE:
      switch (action.target) {
        case 'email':
          return {
            ...state,
            email: action.value,
          };
        case 'password':
          return {
            ...state,
            password: action.value,
          };
        case 'newEmail':
          return {
            ...state,
            newEmail: action.value,
          };
        case 'newPassword':
          return {
            ...state,
            newPassword: action.value,
          };
        case 'prenom':
          return {
            ...state,
            prenom: action.value,
          };
        default:
          return state;
      }

    default:
      return state;
  }
};
export default reducer;
