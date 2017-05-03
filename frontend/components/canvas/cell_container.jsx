import { connect } from 'react-redux';
import Cell from './cell';

const mapStateToProps = (state, ownProps) => {
  const cellState = state.cells.currentCells[ownProps.y][ownProps.x].state;
  const color = (cellState === null || state.controls.stepCount === 0 ? '#282c34' : state.rules[cellState].color);
  return ({
    color: color,
    cellSize: state.cells.cellSize
  });
};

export default connect(
  mapStateToProps,
  null
)(Cell);
