import React from 'react'

function FourRadioButtons(props) {
  return (
    <div>
    <ul>
        <li>
            <input id="color-one" type="radio" name={props.name} value="1" onChange={props.handleChange}/><label
            htmlFor="color-one"
            >1</label
            >
        </li>
        <li>
            <input id="color-two" type="radio" name={props.name} value="2" onChange={props.handleChange}/>
            <label
            htmlFor="color-two"
            >2</label
            >
        </li>
        <li>
            <input id="color-three" type="radio" name={props.name} value="3" onChange={props.handleChange}/><label
            htmlFor="color-three"
            >3</label
            >
        </li>
        <li>
            <input id="color-four" type="radio" name={props.name} value="4" onChange={props.handleChange}/><label
            htmlFor="color-four"
            >4</label
            >
        </li>
    </ul>
    </div>
  )
}

export default FourRadioButtons
