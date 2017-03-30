import { connect } from 'react-redux';
import Cell from './cell';
import { toggleAnt } from '../actions/actions';

const mapStateToProps = state => ({
  cellSize: state.grid.cellSize
});

const mapDispatchToProps = dispatch => ({
  toggleAnt: (x, y) => dispatch(toggleAnt(x, y))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cell);
