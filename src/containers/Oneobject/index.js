import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import findObject from 'src/Selectors/findObject';
import Oneobject from 'src/components/Oneobject';

const mapStateToProps = (state, ownProps) => ({
  oneObject: findObject(state, ownProps.match.params.slug),
});

const mapDispatchToProps = (dispatch) => ({
  
});

const container = connect(mapStateToProps, mapDispatchToProps)(Oneobject);
const containerWithRouter = withRouter(container);
export default containerWithRouter;
