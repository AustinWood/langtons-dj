import { connect } from 'react-redux';
import { selectNoteCollection, changeVolume } from '../../actions/actions';
import DropdownComponent from './dropdown_component';

const mapStateToProps = state => ({
  // stepCount: state.controls.stepCount,
  // cells: state.cells.currentCells,
  // ants: state.ants,
  // rules: state.rules,
  // isPlaying: state.controls.isPlaying
});

const mapDispatchToProps = dispatch => ({
  selectNoteCollection: (int) => dispatch(selectNoteCollection(int))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DropdownComponent);
