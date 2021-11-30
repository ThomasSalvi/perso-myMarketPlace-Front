import { connect } from 'react-redux';
import { toggleMenu, getAllPosts, logOut } from 'src/actions/user';
import Header from 'src/components/Header';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
  visibleSubmenu: state.user.visibleSubmenu,
  userName: state.user.userName,
  redirectUrl: state.user.redirectUrl,
});

const mapDispatchToProps = (dispatch) => (
  {
    toggleMenu: () => {
      dispatch(toggleMenu());
    },
    getAllPosts: () => {
      dispatch(getAllPosts());
    },
    logOut: () => {
      dispatch(logOut());
    }
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
