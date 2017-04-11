import { connect } from 'react-redux';
import { saveNextGrid, togglePlay, reset, changeTempo } from '../actions/actions';
import Controls from './controls';

const mapStateToProps = state => ({
  stepCount: state.controls.stepCount,
  cells: state.cells.currentCells,
  ants: state.ants,
  rules: state.rules,
  isPlaying: state.controls.isPlaying
});

const mapDispatchToProps = dispatch => ({
  saveNextGrid: (cells, ants, music) => dispatch(saveNextGrid(cells, ants, music)),
  togglePlay: () => dispatch(togglePlay()),
  reset: () => dispatch(reset()),
  changeTempo: (tempo) => dispatch(changeTempo(tempo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls);
