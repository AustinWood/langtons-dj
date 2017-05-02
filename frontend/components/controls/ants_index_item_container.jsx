import { connect } from 'react-redux';
import AntsIndexItem from './ants_index_item';
import { changeRhythm } from '../../actions/actions';

// const mapStateToProps = state => ({
  // ants: state.ants
// });

const mapDispatchToProps = dispatch => ({
  changeRhythm: (antId) => dispatch(changeRhythm(antId))
});

export default connect(
  null,
  mapDispatchToProps
)(AntsIndexItem);
