import { connect } from 'react-redux';
import { objectInput, submitNewObject } from 'src/actions/user';
import NewObject from 'src/components/NewObject';

const mapStateToProps = (state) => ({
  newObjects: state.user.newObjects.title,
  isLogged: state.user.isLogged,
  redirectUrl: state.user.redirectUrl,
});

const mapDispatchToProps = (dispatch) => (
  {
    objectInput: (target, value) => {
      dispatch(objectInput(target, value));
    },
    submitNewObject: () => {
      dispatch(submitNewObject());
    }
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(NewObject);
