import React from 'react';
import AntsIndexItemContainer from './ants_index_item_container';

const trebleClefImg = "http://res.cloudinary.com/oblaka/image/upload/v1493822962/treble_clef_gjbzcv.png";
const bassClefImg = "http://res.cloudinary.com/oblaka/image/upload/v1493822962/bass_clef_ant6x9.png";

class AntsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  antComponents() {
    const ants = this.props.ants;
    let antComponentArr = [];
    for (var key in ants) {
      if (ants.hasOwnProperty(key)) {
        const ant = ants[key];
        antComponentArr.push(
          <AntsIndexItemContainer
            ant={ant}
            key={ant.id} />
        );
      }
    }
    while (antComponentArr.length < 4) {
      antComponentArr.push(
        <AntsIndexItemContainer
          ant={null}
          key={antComponentArr.length} />
      );
    }
    return antComponentArr.reverse();
  }

  render() {
    return (
      <div id="ants-index-container">
        <div id="clef-imgs">
          <img
            className="clef-img"
            src={trebleClefImg} />
          <img
            className="clef-img"
            src={bassClefImg} />
        </div>
        <div id="ants-index">
          {this.antComponents()}
        </div>
      </div>

    );
  }
}

export default AntsIndex;
