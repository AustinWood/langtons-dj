import React, { Component } from 'react';
import Tone from 'tone';

export default class Sequencer extends Component {
  constructor(props) {
    super(props);

    this.state = {};


    this.handleDispatch = this.handleDispatch.bind(this);


  }

  handleDispatch() {
    this.props.updateGrid();
  }

  componentDidMount() {
    let synth = new Tone.PolySynth(3, Tone.Synth, {
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
      },
    }).toMaster();

    let handleDispatchB = this.handleDispatch;

    var part = new Tone.Part(function(time, note) {
      synth.triggerAttackRelease(note, "8n", time);
      handleDispatchB();
    }, [[0, ["E4","C3","G3"]]]);
    part.loop = true;
    part.loopEnd = "4n";
    part.start(0);
    this.state.part = part;
    Tone.Transport.bpm.value = 132;
    this.togglePlay();
  }

  componentDidUpdate() {
    console.log('updatein');
    this.togglePlay();
  }

  togglePlay() {
    if (this.props.isPlaying && Tone.Transport.state !== "started") {
      Tone.Transport.start();
    } else if (!this.props.isPlaying && Tone.Transport.state === "started") {
      Tone.Transport.stop();
    }
  }

  render() {
    return (
      <div></div>
    );
  }
}
