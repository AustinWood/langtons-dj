import { connect } from 'react-redux';
import AntsIndex from './ants_index';

const mapStateToProps = state => ({
  ants: state.ants
});

const mapDispatchToProps = dispatch => ({
  // toggleAnt: (pos) => dispatch(toggleAnt(pos)),
  // hover: (pos) => dispatch(hover(pos))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AntsIndex);
