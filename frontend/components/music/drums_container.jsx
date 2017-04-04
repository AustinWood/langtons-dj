import { connect } from 'react-redux';
import Drums from './drums';

const mapStateToProps = state => ({
  stepCount: state.controls.stepCount,
  cells: state.grid.cells,
  ants: state.ants,
  rules: state.rules,
  isPlaying: state.controls.isPlaying,
  currentCellState: state.music.currentCellState
});

export default connect(
  mapStateToProps,
  null
)(Drums);
