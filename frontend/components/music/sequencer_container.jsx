import { connect } from 'react-redux';
import Sequencer from './sequencer';

const mapStateToProps = state => ({
  stepCount: state.controls.stepCount,
  cells: state.grid.cells,
  ants: state.ants,
  rules: state.rules,
  isPlaying: state.controls.isPlaying,
  cellStates: state.music.cellStates
});

export default connect(
  mapStateToProps,
  null
)(Sequencer);
