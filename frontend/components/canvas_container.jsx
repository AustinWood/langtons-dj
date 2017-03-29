import { connect } from 'react-redux';
import Canvas from './canvas';

const mapStateToProps = state => ({
  cells: state.grid.cells
});

const mapDispatchToProps = dispatch => ({
  // none
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Canvas);
