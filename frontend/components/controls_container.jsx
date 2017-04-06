import { connect } from 'react-redux';
import Controls from './controls';
import { togglePlay, reset, saveNextGrid } from '../actions/actions';

const mapStateToProps = state => ({
  stepCount: state.controls.stepCount,
  cells: state.cells.currentCells,
  ants: state.ants.currentAnts,
  rules: state.rules,
  isPlaying: state.controls.isPlaying
});

const mapDispatchToProps = dispatch => ({
  saveNextGrid: (cells, ants, music) => dispatch(saveNextGrid(cells, ants, music)),
  togglePlay: () => dispatch(togglePlay()),
  reset: () => dispatch(reset())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls);
