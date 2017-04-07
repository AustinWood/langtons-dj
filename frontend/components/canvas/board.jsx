import React from 'react';
import { Rect } from 'react-konva';

const Board = ({ width, height }) => {
  return (
    <Rect
      x={0} y={0}
      width={width} height={height}
      fill={'#0A0B1A'} />
  );
};

export default Board;
