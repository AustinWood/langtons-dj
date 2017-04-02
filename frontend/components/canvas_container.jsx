import { connect } from 'react-redux';
import Canvas from './canvas';

const mapStateToProps = state => ({
  cells: state.grid.cells,
  ants: state.ants,
  hover: state.grid.hover,
  cellSize: state.grid.cellSize
});

const mapDispatchToProps = dispatch => ({
  // none
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Canvas);
