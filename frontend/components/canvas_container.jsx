import { connect } from 'react-redux';
import Canvas from './canvas';

const mapStateToProps = state => ({
  cells: state.grid.cells,
  ants: state.grid.ants
});

const mapDispatchToProps = dispatch => ({
  // none
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Canvas);
