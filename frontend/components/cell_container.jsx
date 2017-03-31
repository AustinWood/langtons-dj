import { connect } from 'react-redux';
import Cell from './cell';
import { toggleAnt } from '../actions/actions';

const mapStateToProps = (state, ownProps) => {
  const cellState = state.grid.cells[ownProps.y][ownProps.x].state;
  const color = (cellState === null ? '#282c34' : state.rules[cellState].color);
  return ({
    color: color,
    cellSize: state.grid.cellSize
  });
};

const mapDispatchToProps = dispatch => ({
  toggleAnt: (x, y) => dispatch(toggleAnt(x, y))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cell);
