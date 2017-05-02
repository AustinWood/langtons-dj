import React from 'react';
import Tone from 'tone';
import { monoSynths, amSynths, fmSynths } from './synth_properties';
// import { notes } from '../sequencer/notes';

export default class Sequencer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stepCount: 0,
      tempo: null,
      volume: null
    };
  }

  componentDidMount() {
    this.initializeSynthesizers();
    this.initializeStepper();
    this.toggleTransport();
    this.updateTempo();
    this.updateVolume();
  }

  componentDidUpdate() {
    this.toggleTransport();
    this.calculateChord();
    this.updateTempo();
    this.updateVolume();
  }

  updateTempo() {
    if (this.props.tempo !== this.state.tempo) {
      this.state.tempo = this.props.tempo;
      Tone.Transport.bpm.value = this.props.tempo;
    }
  }

  updateVolume() {
    if (this.props.volume !== this.state.volume) {
      this.state.volume = this.props.volume;
      Tone.Master.volume.value = this.props.volume;
    }
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
    // this.playBass = this.playBass = this.playBass.bind(this);
    // let playBassB = this.playBass;
    // this.playTenor = this.playTenor = this.playTenor.bind(this);
    // let playTenorB = this.playTenor;
    // this.playAlto = this.playAlto = this.playAlto.bind(this);
    // let playAltoB = this.playAlto;
    // this.playTreble = this.playTreble = this.playTreble.bind(this);
    // let playTrebleB = this.playTreble;

    this.playChord = this.playChord = this.playChord.bind(this);
    let playChordB = this.playChord;

    let stepper = new Tone.Part(function(time, note) {
      handleDispatchB();
      // playBassB();
      // playTenorB();
      // playAltoB();
      // playTrebleB();
      playChordB();
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

  calculateChord() {
    const noteCollection = this.props.notes;
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
    this.state.chord = newChord;
    this.state.stepper.removeAll();
    this.state.stepper.add(0, []);
  }

  /////////////////////////
  // PLAY CHORD

  playChord() {
    const ants = this.props.ants;
    for (var key in ants) {
      if (ants.hasOwnProperty(key)) {
        const ant = ants[key];
        const note = this.state.chord[ant.number];
        const rhythmMap = { 0:0, 1:16, 2:8, 4:4, 8:2, 16:1 };
        const rhythmMod = rhythmMap[ant.rhythm];
        if (ant.rhythm === 0) {
          switch (ant.number) {
            case 0:
              this.state.bass.triggerRelease();
              break;
            case 1:
              this.state.tenor.triggerRelease();
              break;
            case 2:
              this.state.alto.triggerRelease();
              break;
            case 3:
              this.state.treble.triggerRelease();
              break;
            default:
              break;
          }
        } else if (this.props.stepCount % rhythmMod === 0) {
          switch (ant.number) {
            case 0:
              this.state.bass.triggerAttack(note);
              break;
            case 1:
              this.state.tenor.triggerAttack(note);
              break;
            case 2:
              this.state.alto.triggerAttack(note);
              break;
            case 3:
              this.state.treble.triggerAttack(note);
              break;
            default:
              break;
          }
        }
      }
    }
  }

  // playBass() {
  //   if (this.props.stepCount % 16 === 1) {
  //     const note = this.state.chord[0];
  //     this.state.bass.triggerAttack(note);
  //   }
  // }
  //
  // playTenor() {
  //   if (this.props.stepCount % 4 === 1) {
  //     const note = this.state.chord[1];
  //     this.state.tenor.triggerAttack(note);
  //   }
  // }
  //
  // playAlto() {
  //   const note = this.state.chord[2];
  //   this.state.alto.triggerAttack(note);
  // }
  //
  // playTreble() {
  //   const note = this.state.chord[3];
  //   this.state.treble.triggerAttack(note);
  // }

  /////////////////////////
  // TRANSPORT and RENDER

  toggleTransport() {
    // Can I put transport in separate comopnent (it's a singleton)
    // so as only to perform this logic when .isPlaying changes ?
    if (this.props.isPlaying && Tone.Transport.state !== "started" && this.props.antCount !== 0) {
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
