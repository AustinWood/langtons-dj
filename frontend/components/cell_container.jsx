import { connect } from 'react-redux';
import Cell from './cell';

const mapStateToProps = state => ({
  cellSize: state.grid.cellSize
});

const mapDispatchToProps = dispatch => ({
  // none
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cell);
