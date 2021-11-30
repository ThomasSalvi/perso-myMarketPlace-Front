import { connect } from 'react-redux';
import { changePanel, connectInputChange, newUser, login } from 'src/actions/user';
import Login from 'src/components/Login';

const mapStateToProps = (state) => ({
  panel: state.user.panel,
  email: state.user.email,
  password: state.user.password,
  newEmail: state.user.newEmail,
  newPassword: state.user.newPassword,
  prenom: state.user.prenom,
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  changePanel: (value) => {
    dispatch(changePanel(value));
  },
  connectInputChange: (target, value) => {
    dispatch(connectInputChange(target, value));
  },
  newUser: () => {
    dispatch(newUser());
  },
  login: () => {
    dispatch(login());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
