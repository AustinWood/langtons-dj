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
    Tone.Transport.bpm.value = 120;
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

    let bass = new Tone.FMSynth(synthProperties).toMaster();
    let tenor = new Tone.FMSynth(synthProperties).toMaster();
    let alto = new Tone.FMSynth(synthProperties).toMaster();
    let treble = new Tone.FMSynth(synthProperties).toMaster();

    this.state.bass = bass;
    this.state.tenor = tenor;
    this.state.alto = alto;
    this.state.treble = treble;
  }

  /////////////////////////
  // STEPPER

  initializeStepper() {
    this.handleDispatch = this.handleDispatch.bind(this);
    let handleDispatchB = this.handleDispatch;

    this.playBass = this.playBass = this.playBass.bind(this);
    let playBassB = this.playBass;

    this.playTenor = this.playTenor = this.playTenor.bind(this);
    let playTenorB = this.playTenor;

    this.playAlto = this.playAlto = this.playAlto.bind(this);
    let playAltoB = this.playAlto;

    this.playTreble = this.playTreble = this.playTreble.bind(this);
    let playTrebleB = this.playTreble;

    let stepper = new Tone.Part(function(time, note) {
      handleDispatchB();
      playBassB();
      playTenorB();
      playAltoB();
      playTrebleB();
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
    const noteCollection = [ // Tetrachords
      ["E2", "F3", "G3", "Db3", "F3"],
      ["Gb3", "Eb3", "Ab3", "D4", "Ab4"],
      ["B4", "C4", "A4", "Bb5", "A5"],
      ["B5", "C5", "A5", "Bb6", "A6"]
    ];
    // const noteCollection = [
    //   ["C2", "C3", "C4", "C5", "C6"],
    //   ["G3", "G4", "G5", "F3", "F4"],
    //   ["E3", "E4", "E5", "A3", "A4"],
    //   ["C2", "C3", "C4", "C5", "C1"]
    // ];
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

  playBass() {
    if (this.props.stepCount % 4 === 1) {
      const note = this.state.chord[0];
      this.state.bass.triggerAttack(note);
    }
  }

  playTenor() {
    const mod = this.props.stepCount % 4;
    if (mod === 1 || mod === 3) {
      const note = this.state.chord[1];
      this.state.tenor.triggerAttack(note);
    }
  }

  playAlto() {
    const rand = Math.floor(Math.random() * 100);
    if (rand < 50) {
      const note = this.state.chord[2];
      this.state.alto.triggerAttack(note);
    } else if (rand < 80) {
      // hold the note
    } else {
      this.state.alto.triggerRelease();
    }
  }

  playTreble() {
    const rand = Math.floor(Math.random() * 100);
    if (rand < 70) {
      const note = this.state.chord[3];
      this.state.treble.triggerAttack(note);
    } else if (rand < 80) {
      // hold the note
    } else {
      this.state.alto.triggerRelease();
    }
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
