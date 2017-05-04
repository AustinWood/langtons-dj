import { connect } from 'react-redux';
import { toggleAnt, hover, closeOverlay } from '../../actions/actions';
import Canvas from './canvas';

const mapStateToProps = state => ({
  cells: state.cells.currentCells,
  ants: state.ants,
  hoverPos: state.cells.hoverPos,
  cellSize: state.cells.cellSize,
  overlayHidden: state.controls.overlayHidden
});

const mapDispatchToProps = dispatch => ({
  toggleAnt: (pos) => dispatch(toggleAnt(pos)),
  hover: (pos) => dispatch(hover(pos)),
  closeOverlay: () => dispatch(closeOverlay())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Canvas);
