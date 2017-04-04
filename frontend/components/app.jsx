import React from 'react';
import CanvasContainer from './canvas_container.jsx';
import ControlsContainer from './controls_container.jsx';
import SynthContainer from './music/synth_container.jsx';

const App = () => (
  <div id="app">
    <CanvasContainer />
    <ControlsContainer />
    <SynthContainer />
  </div>
);

export default App;
