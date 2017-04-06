import { connect } from 'react-redux';
import Canvas from './canvas';
import { toggleAnt, hover } from '../actions/actions';

const mapStateToProps = state => ({
  cells: state.cells.currentCells,
  ants: state.ants.currentAnts,
  hoverPos: state.grid.hover,
  cellSize: state.grid.cellSize
});

const mapDispatchToProps = dispatch => ({
  toggleAnt: (x, y) => dispatch(toggleAnt(x, y)),
  hover: (x, y) => dispatch(hover(x, y))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Canvas);
