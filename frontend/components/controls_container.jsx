import { connect } from 'react-redux';
import Controls from './controls';

const mapStateToProps = state => ({
  // cellSize: state.grid.cellSize
});

const mapDispatchToProps = dispatch => ({
  // toggleAnt: (x, y) => dispatch(toggleAnt(x, y))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls);
