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
    let synth = new Tone.PolySynth(3, Tone.FMSynth, {
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
    }, [[0, ["C3", "D4", "G5"]]]);
    part.loop = true;
    part.loopEnd = "4n";
    part.start(0);
    this.state.part = part;
    Tone.Transport.bpm.value = 450;
    this.toggleTransport();
  }

  handleDispatch() {
    this.props.updateGrid();
  }

  componentDidUpdate() {
    this.toggleTransport();
    this.calculateChord();
  }

  calculateChord() {
    const notes = [
      ["C3","E3","D3","E3","D3"],
      ["G4","F#4","G4","F#4","G4"],
      ["B5","D5","A5","B5","A5"]
    ];
    // ["C3","E3","D3","D3","D3"],
    // ["G4","G4","G4","F#4","G4"],
    // ["B5","D5","A5","A5","A5"]
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
    this.state.part.removeAll();
    this.state.part.add(0, newChord);
  }

  toggleTransport() {
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
