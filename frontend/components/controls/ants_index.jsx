import React from 'react';
import AntsIndexItem from './ants_index_item';

class AntsIndex extends React.Component {
  constructor(props) {
    super(props);
    // this.changeRhythm = this.changeRhythm.bind(this);
  }

  antComponents() {
    const ants = this.props.ants;
    let antComponentArr = [];
    for (var key in ants) {
      if (ants.hasOwnProperty(key)) {
        const ant = ants[key];
        antComponentArr.push(
          <AntsIndexItem
            ant={ant}
            key={ant.id} />
        );
      }
    }
    return antComponentArr;
  }

  render() {
    return (
      <div>
        {this.antComponents()}
        <p>Hello from the index!</p>
      </div>
    );
  }
}

export default AntsIndex;
