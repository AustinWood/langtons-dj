import { connect } from 'react-redux';
import Ant from './ant';

const mapStateToProps = state => ({
  cellSize: state.cells.cellSize,
  color: 'white'
});

const mapDispatchToProps = dispatch => ({
  //
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Ant);
