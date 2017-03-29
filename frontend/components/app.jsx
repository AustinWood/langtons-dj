import React from 'react';
import Canvas from './canvas.jsx';
import {Layer, Rect, Stage, Group} from 'react-konva';

const App = () => (
  <Stage width={700} height={700}>
    <Layer>
      <Canvas />
    </Layer>
  </Stage>
);

export default App;
