import React from 'react';
import AntsIndexItemContainer from './ants_index_item_container';

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
      <div id="ants-index">
        {this.antComponents()}
      </div>
    );
  }
}

export default AntsIndex;
