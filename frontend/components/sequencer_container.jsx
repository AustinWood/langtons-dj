import { connect } from 'react-redux';
import Sequencer from './sequencer';
import { updateGrid } from '../actions/actions';

const mapStateToProps = state => ({
  // stepCount: state.controls.stepCount,
  // cells: state.grid.cells,
  // ants: state.ants,
  // rules: state.rules,
  isPlaying: state.controls.isPlaying,
  // cellStates: state.music.cellStates
});

const mapDispatchToProps = dispatch => ({
  updateGrid: () => dispatch(updateGrid())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sequencer);
