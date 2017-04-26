import { connect } from 'react-redux';
import { updateGrid } from '../../actions/actions';
import Sequencer from './sequencer';

const mapStateToProps = state => ({
  stepCount: state.controls.stepCount,
  isPlaying: state.controls.isPlaying,
  chord: state.music.chord,
  tempo: state.music.tempo,
  volume: state.music.volume,
  notes: state.music.notes,
  antCount: Object.keys(state.ants).length
});

const mapDispatchToProps = dispatch => ({
  updateGrid: () => dispatch(updateGrid())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sequencer);
