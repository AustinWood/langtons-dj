import { connect } from 'react-redux';
import { selectNoteCollection, changeVolume } from '../../actions/actions';
import DropdownComponent from './dropdown_component';

const mapDispatchToProps = dispatch => ({
  selectNoteCollection: (int) => dispatch(selectNoteCollection(int))
});

export default connect(
  null,
  mapDispatchToProps
)(DropdownComponent);
