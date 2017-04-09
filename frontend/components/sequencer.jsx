import React from 'react';
import Tone from 'tone';

export default class Sequencer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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

    let stepper = new Tone.Part(function(time, note) {
      handleDispatchB();
      synth.triggerAttackRelease(note, "32n", time);
    }, []);
    stepper.loop = true;
    stepper.loopEnd = "16n";
    stepper.start(0);
    this.state.stepper = stepper;

    let handleDispatchB = this.handleDispatch;

    Tone.Transport.bpm.value = 80;
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
    const pentatonic = [
      ["C2", "C3", "C4", "C5", "C6"],
      ["G3", "G4", "G5", "F3", "F4"],
      ["E3", "E4", "E5", "A3", "A4"],
      ["C2", "C3", "C4", "C5", "C6"]
    ];
    let newChord = [];
    let bassNote = [];
    let altoNote = [];
    const chordObj = this.props.chord;
    let i = 0;
    for (var key in chordObj) {
      if (chordObj.hasOwnProperty(key)) {
        const pentatonicSub = pentatonic[i];
        if (pentatonicSub != null) {
          const cellState = chordObj[key];
          const note = pentatonicSub[cellState];
          newChord.push(note);
        }
        i += 1;
      }
    }
    this.state.stepper.removeAll();
    this.state.stepper.add(0, newChord);
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
