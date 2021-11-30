import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Profil from 'src/components/Profil';
import findMyObject from 'src/Selectors/findMyObject';
import { toggleEditForm, toggleProfilSubmit, editProfil, editSubmit, deleteObject } from 'src/actions/user';

const mapStateToProps = (state, ownProps) => ({
  userId: state.user.userId,
  redirectUrl: state.user.redirectUrl,
  user: state.user.userName,
  userEmail: state.user.email,
  objects: findMyObject(state),
  editForm: state.user.editForm,
  editName: state.user.editName,
  editEmail: state.user.editEmail,
  profilSubmit: state.user.profilSubmit,
});

const mapDispatchToProps = (dispatch) => ({
  toggleEditForm: () => {
    dispatch(toggleEditForm());
  },
  editProfil: (target, value) => {
    dispatch(editProfil(target, value));
  },
  editSubmit: () => {
    dispatch(editSubmit());
  },
  toggleProfilSubmit: () => {
    dispatch(toggleProfilSubmit());
  },
  deleteObject: (id) => {
    dispatch(deleteObject(id));
  }
});

const container = connect(mapStateToProps, mapDispatchToProps)(Profil);
const containerWithRouter = withRouter(container);
export default containerWithRouter;
