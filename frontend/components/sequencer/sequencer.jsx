import React from 'react';
import Tone from 'tone';
import { monoSynths, amSynths, fmSynths } from './synth_properties';

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
    let bass = new Tone.Synth(monoSynths.bassy).toMaster();
    let tenor = new Tone.Synth(monoSynths.bassy).toMaster();
    let alto = new Tone.AMSynth(amSynths.tiny).toMaster();
    let treble = new Tone.AMSynth(amSynths.tiny).toMaster();

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
    if (this.props.stepCount % 16 === 1) {
      const note = this.state.chord[0];
      this.state.bass.triggerAttack(note);
    }
  }

  playTenor() {
    if (this.props.stepCount % 4 === 1) {
      const note = this.state.chord[1];
      this.state.tenor.triggerAttack(note);
    }
  }

  playAlto() {
    const rand = 1; //Math.floor(Math.random() * 100);
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
    const rand = 1; //Math.floor(Math.random() * 100);
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
      this.state.bass.triggerRelease();
      this.state.tenor.triggerRelease();
      this.state.alto.triggerRelease();
      this.state.treble.triggerRelease();
    }
  }

  render() {
    return (<div />);
  }
}
