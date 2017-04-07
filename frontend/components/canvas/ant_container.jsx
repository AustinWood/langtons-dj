import { connect } from 'react-redux';
import Ant from './ant';

const mapStateToProps = state => ({
  cellSize: state.cells.cellSize,
  color: 'white'
});

export default connect(
  mapStateToProps,
  null
)(Ant);
