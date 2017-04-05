import React, { Component } from 'react';
import Tone from 'tone';

export default class Synth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stepCount: 0
    };
    this.state.synth = new Tone.PolySynth(3, Tone.Synth).toMaster();
    this.playMusic = this.playMusic.bind(this);
  }

  componentDidUpdate() {
    if (this.props.isPlaying && this.state.stepCount !== this.props.stepCount) {
      this.playMusic();
    }
  }

  playMusic() {
    this.state.stepCount = this.props.stepCount;
    let cellStates = this.props.cellStates;
    let chord = [];
    for (let i = 0; i < cellStates.length; i++) {
      switch (i) {
        case 0:
          chord.push(["E4","C3","G3","C4","C4","G3"][cellStates[i]]);
        case 1:
          chord.push(["E3","C2","G2","C3","C2","G2"][cellStates[i]]);
        default:
          chord.push(["E5","C5","G5","C6","C5","G5"][cellStates[i]]);
      }
    }

    //a polysynth composed of 6 Voices of Synth
    // var synth = new Tone.PolySynth(3, Tone.Synth).toMaster();
    //set the attributes using the set interface
    this.state.synth.set("detune", 0);
    //play a chord
    this.state.synth.triggerAttackRelease(chord, "8n");
  }

  render() {
    return (
      <div></div>
    );
  }
}
