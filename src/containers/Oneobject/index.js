import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import findObject from 'src/Selectors/findObject';
import Oneobject from 'src/components/Oneobject';
import { deleteObject, findOwner } from 'src/actions/user';

const mapStateToProps = (state, ownProps) => ({
  oneObject: findObject(state, ownProps.match.params.slug),
  userId: state.user.userId,
  redirectUrl: state.user.redirectUrl,
  owner: state.user.owner,
});

const mapDispatchToProps = (dispatch) => ({
  deleteObject: (id) => {
    dispatch(deleteObject(id));
  },
  findOwner: (id) => {
    dispatch(findOwner(id));
  },
});

const container = connect(mapStateToProps, mapDispatchToProps)(Oneobject);
const containerWithRouter = withRouter(container);
export default containerWithRouter;
