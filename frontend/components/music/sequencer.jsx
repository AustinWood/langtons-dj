import React, { Component } from 'react';
import Tone from 'tone';

export default class Sequencer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stepCount: 0,
      prevChord: []
    };

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

    var part = new Tone.Part(function(time, note){
    	//the notes given as the second element in the array
    	//will be passed in as the second argument
    	synth.triggerAttackRelease(note, "8n", time);
    }, [[0, ["E4","C3","G3"]]]);
    // }, [[0, "C2"], ["0:2", "C3"], ["0:3:2", "G2"]]);
    // let part = new Tone.Part(function(time, note) {
    //   synth.triggerAttackRelease(note.noteName, note.duration, time, note.velocity);
    // }, [
    //   {
    //     "time": "0i",
    //     "noteName": "G4",
    //     "velocity": 0.8110236220472441,
    //     "duration": "4n"
    //   },
    // ]).start(0);
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
