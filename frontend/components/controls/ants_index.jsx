import React from 'react';
import AntsIndexItemContainer from './ants_index_item_container';

const trebleClefImg = "http://res.cloudinary.com/oblaka/image/upload/v1493743199/treble_clef_cdqxc1.png";
const bassClefImg = "http://res.cloudinary.com/oblaka/image/upload/v1493743199/bass_clef_i94fu0.png";

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
    return antComponentArr;
  }

  render() {
    return (
      <div id="ants-index-container">
        <div id="clef-imgs">
          <img
            className={'clef-img'}
            src={trebleClefImg} />
          <img
            className={'clef-img'}
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
