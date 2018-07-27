import React from 'react';

const Option = (props) => {
  return (
    <div className="">
      {props.optionText}
      <button
        className=""
        onClick={(event) => {props.removeSingleItem(props.optionText)}}>
        Remove
      </button>
      </div>
  )
}

export default Option;