import { connect } from 'react-redux';
import Objectlist from 'src/components/Objectlist';

const mapStateToProps = (state) => ({
  posts: state.user.posts,
});

const mapDispatchToProps = (dispatch) => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Objectlist);
