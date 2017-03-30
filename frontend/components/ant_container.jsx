import { connect } from 'react-redux';
import Ant from './ant';

const mapStateToProps = state => ({
  cellSize: state.grid.cellSize,
  color: 'red'
});

const mapDispatchToProps = dispatch => ({
  //
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Ant);
