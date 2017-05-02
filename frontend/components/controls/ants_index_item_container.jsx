import { connect } from 'react-redux';
import AntsIndexItem from './ants_index_item';

const mapStateToProps = state => ({
  // ants: state.ants
});

const mapDispatchToProps = dispatch => ({
  // toggleAnt: (pos) => dispatch(toggleAnt(pos)),
  // hover: (pos) => dispatch(hover(pos))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AntsIndexItem);
