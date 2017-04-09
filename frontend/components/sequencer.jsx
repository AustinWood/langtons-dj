import React from 'react';
import Tone from 'tone';

export default class Sequencer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stepCount: 0
    };
  }

  componentDidMount() {
    this.initializeSynthesizers();
    this.initializeStepper();
    Tone.Transport.bpm.value = 80;
    this.toggleTransport();
  }

  /////////////////////////
  // SYNTHESIZERS

  initializeSynthesizers() {
    const synthProperties = {
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
    };

    let treble1 = new Tone.FMSynth(synthProperties).toMaster();

    this.state.treble1 = treble1;
  }

  /////////////////////////
  // STEPPER

  initializeStepper() {
    this.handleDispatch = this.handleDispatch.bind(this);
    let handleDispatchB = this.handleDispatch;

    this.playTreble1 = this.playTreble1 = this.playTreble1.bind(this);
    let playTreble1B = this.playTreble1;

    let stepper = new Tone.Part(function(time, note) {
      handleDispatchB();
      playTreble1B();
    }, []);

    stepper.loop = true;
    stepper.loopEnd = "16n";
    stepper.start(0);
    this.state.stepper = stepper;
  }

  handleDispatch() {
    this.props.updateGrid();
  }

  /////////////////////////
  // CALCULATE CHORD

  componentDidUpdate() {
    console.log("did update");
    this.toggleTransport();
    this.calculateChord();
  }

  calculateChord() {
    console.log("calculate chord");
    const noteCollection = [
      ["C2", "C3", "C4", "C5", "C6"],
      ["G3", "G4", "G5", "F3", "F4"],
      ["E3", "E4", "E5", "A3", "A4"],
      ["C2", "C3", "C4", "C5", "C1"]
    ];
    let newChord = [];
    const chordObj = this.props.chord;
    let i = 0;
    for (var key in chordObj) {
      if (chordObj.hasOwnProperty(key)) {
        const noteArr = noteCollection[i];
        if (noteArr !== null) {
          const cellState = chordObj[key];
          const note = noteArr[cellState];
          newChord.push(note);
        }
        i += 1;
      }
    }
    console.log(newChord);
    this.state.chord = newChord;
    this.state.stepper.removeAll();
    this.state.stepper.add(0, []);
  }

  /////////////////////////
  // PLAY CHORD

  playTreble1() {
    const treble1Note = this.state.chord[3];
    this.state.treble1.triggerAttack(treble1Note);
  }

  /////////////////////////
  // TRANSPORT and RENDER

  toggleTransport() {
    // can I put transport in separate comopnent (it's a singleton)
    // so as only to perform this logic when .isPlaying changes ?
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
