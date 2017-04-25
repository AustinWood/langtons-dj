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
    const optionIdx = options.indexOf(option.label);
    console.log(optionIdx);
    this.setState({selected: option});
  }

  render() {
    const defaultOption = this.state.selected;

    return (
      <Dropdown
        options={options}
        onChange={this._onSelect}
        value={this.state.selected}
        placeholder="Select an option" />
    );
  }
}

export default DropdownComponent;
