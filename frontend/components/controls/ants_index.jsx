import React from 'react';
import AntsIndexItem from './ants_index_item';

const antComponents = ants => (
  ants.map(note => (
    <NotesIndexItem
      note={note}
      key={note.id}
      selectNote={selectNote}
      selected={note.id === selectedNoteId} />
  ))
);

const antComponents = () => {
  const ants = this.props.ants;
  let antComponents = [];
  for (var key in ants) {
    if (ants.hasOwnProperty(key)) {
      const ant = ants[key];
      antComponents.push(
        // / see img above, already cut ///
      );
    }
  }
  return antComponents;
}

const AntsIndex = ({ notes }) => (
  <div className="notes-index-component">
    <div className="notes-index-header">
      <p onClick={logSeeds}>Showing {notes.length} of {notes.length} notes</p>
      <button onClick={addNote}>
        <img
          src={editMode && selectedNoteId === null ? "http://res.cloudinary.com/oblaka/image/upload/v1490366431/add_green_ffexud.png" : "http://res.cloudinary.com/oblaka/image/upload/v1490206752/add_note_qhau1s.png"}
          className="nav-img"
          id={editMode && selectedNoteId === null ? "add-img-green" : "add-img"} />
      </button>
    </div>

    <div className="notes-index-container">
      {noteComponents(notes, selectNote, selectedNoteId)}
    </div>

  </div>
);

export default AntsIndex;
