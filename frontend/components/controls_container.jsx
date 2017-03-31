import { connect } from 'react-redux';
import Controls from './controls';
import { incrementStep } from '../actions/actions';

const mapStateToProps = state => ({
  stepCount: state.controls.stepCount,
  cells: state.grid.cells,
  ants: state.ants,
  rules: state.rules
});

const mapDispatchToProps = dispatch => ({
  incrementStep: (cells, ants) => dispatch(incrementStep(cells, ants))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls);
