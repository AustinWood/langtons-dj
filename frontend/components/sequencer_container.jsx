import { connect } from 'react-redux';
import { updateGrid } from '../actions/actions';
import Sequencer from './sequencer';

const mapStateToProps = state => ({
  isPlaying: state.controls.isPlaying,
  chord: state.music.chord
});

const mapDispatchToProps = dispatch => ({
  updateGrid: () => dispatch(updateGrid())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sequencer);
