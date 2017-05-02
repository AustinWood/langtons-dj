import React from 'react';
import AntsIndexItem from './ants_index_item';

const antComponents = (ants) => {
  // const ants = this.props.ants;
  let antComponentArr = [];
  for (var key in ants) {
    if (ants.hasOwnProperty(key)) {
      const ant = ants[key];
      antComponentArr.push(
        <NotesIndexItem
          ant={ant}
          key={ant.id} />
      );
    }
  }
  return antComponents;
};


const AntsIndex = ({ ants }) => (
  <div>
    {antComponents(ants)}
  </div>
);

export default AntsIndex;
