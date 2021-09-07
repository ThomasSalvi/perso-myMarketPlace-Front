import { connect } from 'react-redux';
import Objectlist from 'src/components/Objectlist';

const mapStateToProps = (state) => ({
  objects: state.object.allObjects,
});

const mapDispatchToProps = (dispatch) => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Objectlist);
