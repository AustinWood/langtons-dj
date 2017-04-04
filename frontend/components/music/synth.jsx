import React, { Component } from 'react';
// import {SynthSrc} from 'synth_src';

export default class Demo extends Component {
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
      console.log(this.props.stepCount);
      switch (this.props.currentCellState) {
        case 0:
          var audio = new Audio('./samples/kick.wav');
          audio.play();
          break;
        case 1:
          var audio = new Audio('./samples/snare.wav');
          audio.play();
          break;
        case 2:
          var audio = new Audio('./samples/hihat.wav');
          audio.play();
          break;
        case 3:
          var audio = new Audio('./samples/kick.wav');
          audio.play();
          break;
        default:
          var audio = new Audio('./samples/hihat.wav');
          audio.play();
          break;
      }
      if (this.props.currentCellState === 0) {

      } else {
        var audio = new Audio('./samples/hihat.wav');
        audio.play();
      }
    }
  }

  render() {
    // console.log(this.props);
    return (
      <div>
        Synth
      </div>
    );
  }
}
