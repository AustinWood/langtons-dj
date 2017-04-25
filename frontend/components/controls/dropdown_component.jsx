import React from 'react';
import Dropdown from 'react-dropdown';

const options = [
  'one', 'two', 'three'
];

class DropdownComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: options[0]
    };
    this._onSelect = this._onSelect.bind(this);
  }

  _onSelect (option) {
    console.log('You selected ', option.label);
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
