import { connect } from 'react-redux';
import Cell from './cell';

const mapStateToProps = (state, ownProps) => {
  const cellState = state.grid.cells[ownProps.y][ownProps.x].state;
  const color = (cellState === null ? '#282c34' : state.rules[cellState].color);
  return ({
    color: color,
    cellSize: state.grid.cellSize
  });
};

export default connect(
  mapStateToProps,
  null
)(Cell);
