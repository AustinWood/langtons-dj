import React from 'react';
import Tone from 'tone';

export default class Sequencer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chord: ["C3", "D4", "G5"]
    };
    this.handleDispatch = this.handleDispatch.bind(this);
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
    }, [[0, this.state.chord]]);
    part.loop = true;
    part.loopEnd = "4n";
    part.start(0);
    this.state.part = part;
    Tone.Transport.bpm.value = 80;
    this.togglePlay();
  }

  handleDispatch() {
    this.props.updateGrid();
  }

  componentDidUpdate() {
    this.togglePlay();
    this.calculateChord();
  }

  calculateChord() {
    const pentatonic = [
      ["C3","D3","E3","G3","A3"],
      ["C4","D4","E4","G4","A4"],
      ["C5","D5","E5","G5","A5"]
    ];

    let newChord = [];
    const chordObj = this.props.chord;
    let i = 0;
    for (var key in chordObj) {
      if (chordObj.hasOwnProperty(key)) {
        const pentatonicSub = pentatonic[i];
        const cellState = chordObj[key];
        const note = pentatonicSub[cellState];
        newChord.push(note);
        i += 1;
      }
    }

    console.log(newChord);
    this.state.chord = newChord;

  }

  togglePlay() {
    if (this.props.isPlaying && Tone.Transport.state !== "started") {
      Tone.Transport.start();
    } else if (!this.props.isPlaying && Tone.Transport.state === "started") {
      Tone.Transport.stop();
    }
  }

  render() {
    return (<div />);
  }
}
