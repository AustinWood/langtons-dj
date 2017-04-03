import { connect } from 'react-redux';
import Music from './music';

const mapStateToProps = state => ({
  stepCount: state.controls.stepCount,
  cells: state.grid.cells,
  ants: state.ants,
  rules: state.rules,
  isPlaying: state.controls.isPlaying
});

export default connect(
  mapStateToProps,
  null
)(Music);
