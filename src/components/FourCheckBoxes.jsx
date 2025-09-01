import React from 'react'

function fourCheckBoxes(props) {
  return (
        <div>
            <ul>
                <li>
                    <label
                    ><input
                        name={props.name}
                        type="checkbox"
                        value={props.first}
                        onChange={props.handleChange}
                        checked={props.selected.includes(props.first)}
                    />{props.first}</label
                    >
                </li>
                <li>
                    <label>
                    <input 
                        name={props.name} 
                        type="checkbox" 
                        value={props.second} 
                        onChange={props.handleChange}
                        checked={props.selected.includes(props.second)}
                    />
                        {props.second}
                    </label>
                </li>
                <li>
                    <label
                    ><input
                        name={props.name}
                        type="checkbox"
                        value={props.third}
                        onChange={props.handleChange}
                        checked={props.selected.includes(props.third)}
                    />{props.third}</label
                    >
                </li>
                <li>
                    <label
                    ><input name={props.name} 
                    type="checkbox" 
                    value={props.fourth} 
                    onChange={props.handleChange}
                    checked={props.selected.includes(props.fourth)}/>{props.fourth} </label
                    >
                </li>
            </ul>
        </div>
  );
}

export default fourCheckBoxes
