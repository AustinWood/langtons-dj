import React from 'react';
import CanvasContainer from './canvas/canvas_container';
import ControlsContainer from './controls/controls_container';
import SequencerContainer from './sequencer/sequencer_container';
import Footer from './footer';

const App = () => (
  <div id="app">
    <div id="main">
      <ControlsContainer />
      <CanvasContainer />
      <SequencerContainer />
    </div>
    <Footer />
  </div>
);

export default App;
