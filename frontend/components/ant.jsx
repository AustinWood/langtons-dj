import React from 'react';
import ReactDOM from 'react-dom';
import { Circle, Image } from 'react-konva';
import Konva from 'konva';

class Ant extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("rendering ant");
    console.log(this.props);
    return (
      <Circle
        x={this.props.x * this.props.cellSize + this.props.cellSize / 2}
        y={this.props.y * this.props.cellSize + this.props.cellSize / 2}
        radius={this.props.cellSize * 0.25}
        fill={this.props.color}
        fill={'red'} />
    );
  }

  // ~~ OR MAYBE... ~~
  // render() {
  //   const imageObj = <img src={'http://res.cloudinary.com/oblaka/image/upload/v1490101923/face-5_rfc7pi.png'} />;
  //   return imageObj;
  //   return (
  //     <Image
  //       x={this.props.x * this.props.cellSize + this.props.cellSize / 2}
  //       y={this.props.y * this.props.cellSize + this.props.cellSize / 2}
  //       width={100}
  //       height={100}
  //       image={imageObj} />
  //   );
  // }

  // render() {
  //   console.log("rendering ant");
  //   console.log(this.props);
  //
  //   var imageObj = new Image();
  //   imageObj.onload = function() {
  //     var yoda = new Konva.Image({
  //       x: 50,
  //       y: 50,
  //       image: imageObj,
  //       width: 106,
  //       height: 118
  //     });
  //     // add the shape to the layer
  //     // layer.add(yoda);
  //     // add the layer to the stage
  //     // stage.add(layer);
  //   };
  //   imageObj.src = 'http://res.cloudinary.com/oblaka/image/upload/v1490101923/face-5_rfc7pi.png';


    // var imageObj = new Image();
    // imageObj.onload = function() {
    //   var image = new Konva.Image({
    //     x: 200,
    //     y: 50,
    //     image: imageObj,
    //     width: 100,
    //     height: 100
    //   });
    // };
    // imageObj.src = '';

  //   return imageObj;
  // }

}

export default Ant;
