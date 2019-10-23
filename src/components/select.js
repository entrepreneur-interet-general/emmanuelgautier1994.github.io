import React from 'react'

export default class Select extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const props = this.props;

    let disabled = false;
    if (props.disabled) {
      disabled = props.disabled
    }

    const index = props.index;
    const array = props.array;
    const onChange = props.onChange;
    const style = props.style;

    const components = array.map((val,i)=>
      <option key={i} value={i}>{val}</option>
    );

    return (
      <select
        value={index}
        onChange={onChange}
        style={style}
        disabled={disabled}
      >
        {components}
      </select>
    )
  }
}

