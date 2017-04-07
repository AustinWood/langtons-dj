import { connect } from 'react-redux';
import Canvas from './canvas';
import { toggleAnt, hover } from '../../actions/actions';

const mapStateToProps = state => ({
  cells: state.cells.currentCells,
  ants: state.ants.currentAnts,
  hoverPos: state.cells.hover,
  cellSize: state.cells.cellSize
});

const mapDispatchToProps = dispatch => ({
  toggleAnt: (pos) => dispatch(toggleAnt(pos)),
  hover: (pos) => dispatch(hover(pos))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Canvas);
