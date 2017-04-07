import React from 'react';
import ReactDOM from 'react-dom';
import { Circle } from 'react-konva';

const Ant = ({ x, y, cellSize, color }) => {
  return (
    <Circle
      x={x * cellSize + cellSize / 2}
      y={y * cellSize + cellSize / 2}
      radius={cellSize * 0.25}
      fill={color} />
  );
};

export default Ant;
