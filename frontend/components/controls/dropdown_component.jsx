import React from 'react';
import Dropdown from 'react-dropdown';
import { notes } from '../sequencer/notes';

let options = function () {
  let output = [];
  for (var key in notes) {
    if (notes.hasOwnProperty(key)) {
        output.push(notes[key].name);
    }
  }
  return output;
}();

class DropdownComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: options[0]
    };
    this._onSelect = this._onSelect.bind(this);
  }

  _onSelect(option) {
    this.setState({selected: option});
    const optionIdx = options.indexOf(option.label);
    this.props.selectNoteCollection(optionIdx);
  }

  render() {
    const defaultOption = this.state.selected;

    return (
      <div id="dropdown-container">
        <Dropdown
          options={options}
          onChange={this._onSelect}
          value={this.state.selected}
          placeholder="Select an option" />
      </div>
    );
  }
}

export default DropdownComponent;
