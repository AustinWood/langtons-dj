import { connect } from 'react-redux';
import Controls from './controls';
import { incrementStep, togglePlay, reset } from '../actions/actions';

const mapStateToProps = state => ({
  stepCount: state.controls.stepCount,
  cells: state.grid.cells,
  ants: state.ants,
  rules: state.rules,
  isPlaying: state.controls.isPlaying
});

const mapDispatchToProps = dispatch => ({
  incrementStep: (cells, ants, music) => dispatch(incrementStep(cells, ants, music)),
  togglePlay: () => dispatch(togglePlay()),
  reset: () => dispatch(reset())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls);
