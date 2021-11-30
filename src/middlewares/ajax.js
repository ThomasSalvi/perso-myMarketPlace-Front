import axios from 'axios';
import { saveAllPosts, toggleProfilSubmit, EDIT_SUBMIT, saveOwner, FIND_OWNER, redirectUrl, stopRedirect,getAllPosts, DELETE_OBJECT, NEW_USER, GEt_ALL_POSTS, LOGIN, saveUser, SUBMIT_NEW_OBJECT, LOG_OUT } from 'src/actions/user';

const ajax = (store) => (next) => (action) => {
  const state = store.getState();
  const url = 'http://localhost:3000';
  const config = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  const configToken = {
    headers: {
      Accept: 'application/json',
      'content-type': 'application/json',
    },
  };
  const pictureConfig = {
    headers: {
      Accept: 'application/json',
      'content-type': 'multipart/form-data',
    },
  };
  if (action.type == LOG_OUT) {
    localStorage.clear();
    next(action);
  }
  if (action.type == EDIT_SUBMIT) {
    const editUser = {
      email: state.user.editEmail,
      name: state.user.editName,
      id: state.user.userId,
    };
    const userStorage = {
      userEmail: state.user.editEmail,
      userName: state.user.editName,
      userId: state.user.userId,
    };
    axios.put(`${url}/api/auth/user`, editUser)
      .then((response) => {
        localStorage.setItem('user', JSON.stringify(userStorage));
        store.dispatch(toggleProfilSubmit());
      });
    next(action);
  }
  if (action.type === NEW_USER) {
    const data = {
      email: state.user.newEmail,
      password: state.user.newPassword,
      name: state.user.prenom,
    };
    axios.post(`${url}/api/auth/signup`, data, config)
      .then((response) => {
        console.log('toto', response);
      });
    next(action);
  }
  if (action.type === GEt_ALL_POSTS) {
    axios.get(`${url}/api/stuff`, config)
      .then((response) => {
        store.dispatch(saveAllPosts(response.data));
      });
    next(action);
  }
  if (action.type === LOGIN) {
    const data = {
      email: state.user.email,
      password: state.user.password,
    };
    axios.post(`${url}/api/auth/login`, data, config)
      .then((response) => {
        store.dispatch(saveUser(response.data));
        localStorage.setItem('user', JSON.stringify(response.data));
      });
    next(action);
  }
  if (action.type == DELETE_OBJECT) {
    axios.delete(`${url}/api/stuff/${action.value}`)
      .then((response) => {
        console.log(response);
        store.dispatch(getAllPosts());
        store.dispatch(redirectUrl('/'));
        store.dispatch(stopRedirect());
      });
    next(action);
  }
  if (action.type == FIND_OWNER) {
    const data = {
      id: action.value,
    };
    axios.post(`${url}/api/auth/user`, data)
      .then((response) => {
        console.log(response);
        store.dispatch(saveOwner(response.data.userName));
      });
    next(action);
  }
  if (action.type === SUBMIT_NEW_OBJECT) {
    const thing = {
      title: state.user.newObjects.title,
      description: state.user.newObjects.desc,
      imageUrl: state.user.newObjects.picture,
      userId: state.user.userId,
      price: state.user.newObjects.price,
    };
    const data = new FormData();
    data.append('thing', JSON.stringify(thing));
    data.append('image', state.user.newObjects.picture);
    axios.post(`${url}/api/stuff`, data, pictureConfig)
      .then((response) => {
        store.dispatch(getAllPosts());
        store.dispatch(redirectUrl('/'));
        store.dispatch(stopRedirect());
      });
    next(action);
  }
  else {
    next(action);
  }
};
export default ajax;
