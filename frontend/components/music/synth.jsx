import React, { Component } from 'react';
import Tone from 'tone';

export default class Synth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stepCount: 0
    };
  }

  componentDidMount() {
    console.log("synth mounted");
  }

  componentDidUpdate() {
    if (this.state.stepCount !== this.props.stepCount) {
      this.state.stepCount = this.props.stepCount;
      var synth = new Tone.Synth().toMaster();

      switch (this.props.cellState) {
        case 0:
          synth.triggerAttackRelease("E4", "8n");
          break;
        case 1:
          synth.triggerAttackRelease("G4", "8n");
          break;
        case 2:
          synth.triggerAttackRelease("C4", "8n");
          break;
        case 3:
          synth.triggerAttackRelease("C5", "8n");
          break;
        default:
          synth.triggerAttackRelease("E5", "8n");
          break;
      }
    }
  }

  render() {
    return (
      <div></div>
    );
  }
}
