import React from 'react';
import { Circle } from 'react-konva';

const Ant = ({ currentState, cellSize, color }) => {
  const x = currentState.pos.x;
  const y = currentState.pos.y;
  return (
    <Circle
      x={x * cellSize + cellSize / 2}
      y={y * cellSize + cellSize / 2}
      radius={cellSize * 0.25}
      fill={color} />
  );
};

export default Ant;
