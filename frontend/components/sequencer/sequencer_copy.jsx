// import React from 'react';
// import Tone from 'tone';
//
// export default class Sequencer extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//     this.handleDispatch = this.handleDispatch.bind(this);
//   }
//
//   componentDidMount() {
//
//
//
//     let synth = new Tone.PolySynth(3, Tone.FMSynth, {
//       "oscillator" : {
//         "type" : "fatsawtooth",
//         "count" : 3,
//         "spread" : 30
//       },
//       "envelope": {
//         "attack": 0.01,
//         "decay": 0.1,
//         "sustain": 0.5,
//         "release": 0.4,
//         "attackCurve" : "exponential"
//       },
//     }).toMaster();
//
//     let stepper = new Tone.Part(function(time, note) {
//       handleDispatchB();
//       synth.triggerAttackRelease(note, "32n", time);
//     }, []);
//     stepper.loop = true;
//     stepper.loopEnd = "16n";
//     stepper.start(0);
//     this.state.stepper = stepper;
//
//     let handleDispatchB = this.handleDispatch;
//
//     // var part = new Tone.Part(function(time, note) {
//     //   synth.triggerAttackRelease(note, "8n", time);
//     //   handleDispatchB();
//     // }, [[0, []]]);
//     // part.loop = true;
//     // part.loopEnd = "4n";
//     // part.start(0);
//     // this.state.part = part;
//
//
//     // let bassSynth = new Tone.PolySynth(1, Tone.FMSynth, {
//     //   "oscillator" : {
//     //     "type" : "fatsawtooth",
//     //     "count" : 3,
//     //     "spread" : 30
//     //   },
//     //   "envelope": {
//     //     "attack": 0.01,
//     //     "decay": 0.1,
//     //     "sustain": 0.5,
//     //     "release": 0.4,
//     //     "attackCurve" : "exponential"
//     //   },
//     // }).toMaster();
//     //
//     // var bass = new Tone.Part(function(time, note) {
//     //   bassSynth.triggerAttackRelease(note, "2m", time);
//     // }, [[0, []]]);
//     // bass.loop = true;
//     // bass.loopEnd = "2m";
//     // bass.start(0);
//     // this.state.bass = bass;
//     //
//     // let altoSynth = new Tone.PolySynth(1, Tone.FMSynth, {}).toMaster();
//     //
//     // var alto = new Tone.Part(function(time, note) {
//     //   altoSynth.triggerAttackRelease(note, "2n", time);
//     // }, [[0, []]]);
//     // alto.loop = true;
//     // alto.loopEnd = "2n";
//     // alto.start(0);
//     // this.state.alto = alto;
//     //
//     // let trebleSynth = new Tone.PolySynth(1, Tone.FMSynth, {}).toMaster();
//     //
//     // var treble = new Tone.Part(function(time, note) {
//     //   trebleSynth.triggerAttackRelease(note, "32n", time);
//     // }, [[0, []]]);
//     // treble.loop = true;
//     // treble.loopEnd = "16n";
//     // treble.start(0);
//     // this.state.treble = treble;
//
//
//
//     Tone.Transport.bpm.value = 80;
//     this.toggleTransport();
//   }
//
//   handleDispatch() {
//     this.props.updateGrid();
//   }
//
//   componentDidUpdate() {
//     this.toggleTransport();
//     this.calculateChord();
//   }
//
//   calculateChord() {
//
//     // const pentatonic = [
//     //   ["D2", "A3", "D3", "A3", "D3"],
//     //   ["F3", "G3", "A3", "C4", "D4"],
//     //   ["E4", "G4", "A4", "C5", "D5"]
//     // ];
//
//     // ["C3","E3","D3","D3","D3"],
//     // ["G4","G4","G4","F#4","G4"],
//     // ["B5","D5","A5","A5","A5"]
//     let newChord = [];
//     let bassNote = [];
//     let altoNote = [];
//     const chordObj = this.props.chord;
//     let i = 0;
//     for (var key in chordObj) {
//       if (chordObj.hasOwnProperty(key)) {
//         const pentatonicSub = pentatonic[i];
//         if (pentatonicSub != null) {
//           const cellState = chordObj[key];
//           const note = pentatonicSub[cellState];
//           newChord.push(note);
//           // if (i == 0) {
//           //   console.log(note);
//           //   console.log(this.props.stepCount);
//           //   bassNote.push(note);
//           // } else if (i === 1) {
//           //   altoNote.push(note);
//           // } else {
//           //   newChord.push(note);
//           // }
//         }
//         i += 1;
//       }
//     }
//
//     // console.log(newChord);
//     this.state.stepper.removeAll();
//     this.state.stepper.add(0, newChord);
//
//     // if (this.props.stepCount % 8 === 1) {
//     //   this.state.bass.removeAll();
//     //   this.state.bass.add(0, bassNote);
//     // }
//     // if (this.props.stepCount % 4 === 1) {
//     //   this.state.alto.removeAll();
//     //   this.state.alto.add(0, altoNote);
//     // }
//   }
//
//   toggleTransport() {
//     if (this.props.isPlaying && Tone.Transport.state !== "started") {
//       Tone.Transport.start();
//     } else if (!this.props.isPlaying && Tone.Transport.state === "started") {
//       Tone.Transport.stop();
//     }
//   }
//
//   render() {
//     return (<div />);
//   }
// }
