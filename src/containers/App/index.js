import { connect } from 'react-redux';
import { toggleMenu, getAllPosts, logOut } from 'src/actions/user';
import App from 'src/components/App';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = (dispatch) => (
  {
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
