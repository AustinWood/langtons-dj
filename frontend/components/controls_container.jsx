import { connect } from 'react-redux';
import Controls from './controls';
import { incrementStep } from '../actions/actions';

const mapStateToProps = state => ({
  stepCount: state.controls.stepCount
});

const mapDispatchToProps = dispatch => ({
  incrementStep: () => dispatch(incrementStep())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls);
