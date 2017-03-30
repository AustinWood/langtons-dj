import { connect } from 'react-redux';
import Cell from './cell';
import { toggleAnt } from '../actions/actions';

const mapStateToProps = (state, ownProps) => {
  // console.log("LOGGIN!");
  // console.log(state.grid.cells[ownProps.y][ownProps.x]);
  // console.log(ownProps);
  const cellState = state.grid.cells[ownProps.y][ownProps.x].state;
  // console.log(state.rules[0].color);
  const color = (cellState ? state.rules[cellState].color : '#282c34');
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
