import { connect } from 'react-redux';
import {  } from '../../actions/actions';
import Rhythm from './rhythm';

const mapStateToProps = state => ({
  ants: state.ants
  // stepCount: state.controls.stepCount,
  // cells: state.cells.currentCells,
  // ants: state.ants,
  // rules: state.rules,
  // isPlaying: state.controls.isPlaying,
  // tempo: state.music.tempo,
  // volume: state.music.volume
});

const mapDispatchToProps = dispatch => ({
  // saveNextGrid: (cells, ants, music) => dispatch(saveNextGrid(cells, ants, music)),
  // togglePlay: () => dispatch(togglePlay()),
  // reset: () => dispatch(reset()),
  // changeTempo: (tempo) => dispatch(changeTempo(tempo)),
  // changeVolume: (volume) => dispatch(changeVolume(volume))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Rhythm);
