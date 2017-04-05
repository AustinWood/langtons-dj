import React, { Component } from 'react';
import Tone from 'tone';

export default class Synth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stepCount: 0,
      prevChord: []
    };

    var synth = new Tone.PolySynth(6, Tone.FMSynth, {
			"oscillator" : {
        "type" : "fatsawtooth",
				"count" : 3,
				"spread" : 30
			},
			"envelope": {
				"attack": 0.01,
				"decay": 0.1,
				"sustain": 0.5,
				"release": 0.4,
				"attackCurve" : "exponential"
			}
		}).toMaster();
    this.state.synth = synth;
  }

  componentDidUpdate() {
    if (this.props.isPlaying && this.state.stepCount !== this.props.stepCount) {
      this.playMusic();
    } else if (!this.props.isPlaying) {
      this.state.synth.triggerRelease(this.state.prevChord);
      this.state.prevChord = [];
    }
  }

  playMusic() {
    this.state.synth.triggerRelease(this.state.prevChord);
    var vel = Math.random() * 0.5 + 0.5;

    this.state.stepCount = this.props.stepCount;
    let cellStates = this.props.cellStates;
    let chord = [];
    for (let i = 0; i < 3; i++) { // i < cellStates.length
      const chords = [
        ["E4","C3","G3","C4","C4","G3"],
        ["E3","C2","G2","C3","C2","G2"],
        ["E5","C5","G5","C6","C5","G5"]
      ];
      chord.push(chords[i][cellStates[i]]);
    }
    this.state.synth.triggerAttackRelease(chord, "1m");
    this.state.prevChord = chord;
  }

  render() {
    return (
      <div></div>
    );
  }
}
