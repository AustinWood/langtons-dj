import React, { Component } from 'react';

export default class Drums extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stepCount: 0
    };
  }
  
  componentDidUpdate() {
    // if (this.state.stepCount !== this.props.stepCount) {
    //   this.state.stepCount = this.props.stepCount;
    //   switch (this.props.cellState) {
    //     case 0:
    //       var audio = new Audio('./samples/kick.wav');
    //       audio.play();
    //       break;
    //     case 1:
    //       var audio = new Audio('./samples/snare.wav');
    //       audio.play();
    //       break;
    //     case 2:
    //       var audio = new Audio('./samples/hihat.wav');
    //       audio.play();
    //       break;
    //     case 3:
    //       var audio = new Audio('./samples/kick.wav');
    //       audio.play();
    //       break;
    //     default:
    //       var audio = new Audio('./samples/hihat.wav');
    //       audio.play();
    //       break;
    //   }
    // }
  }

  render() {
    return (
      <div></div>
    );
  }
}
