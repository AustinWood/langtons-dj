import React, { Component } from 'react';

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
    }
  }

  render() {
    return (
      <div></div>
    );
  }
}
