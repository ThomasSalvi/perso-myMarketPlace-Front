import { connect } from 'react-redux';
import { toggleMenu } from 'src/actions/user';
import Header from 'src/components/Header';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
  visibleSubmenu: state.user.visibleSubmenu,
});

const mapDispatchToProps = (dispatch) => (
  {
    toggleMenu: () => {
      dispatch(toggleMenu());
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
