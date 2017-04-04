import React from 'react';
import CanvasContainer from './canvas_container.jsx';
import ControlsContainer from './controls_container.jsx';
import Music from './music/music.jsx';

const App = () => (
  <div id="app">
    <CanvasContainer />
    <ControlsContainer />
    <Music />
  </div>
);

export default App;
