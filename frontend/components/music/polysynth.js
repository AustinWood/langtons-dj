import React, { PropTypes, Component } from 'react';


import {
  Delay,
  MoogFilter,
  Reverb,
  Synth,
} from 'react-music';

export default class Polysynth extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    (
      <Delay>
        <Reverb>
          <Synth
            type="sine"
            gain={0.15}
            steps={this.props.steps}
          />
          <MoogFilter bufferSize={4096}>
            <Synth
              type="square"
              gain={0.15}
              transpose={1}
              steps={this.props.steps}
            />
          </MoogFilter>
        </Reverb>
      </Delay>
    );
  }
}

// const Polysynth = (props) => (
//
// );
//
Polysynth.propTypes = {
  steps: PropTypes.array,
};

// export default Polysynth;
