import React from 'react'
import { useSnapshot } from 'valtio'
import state from '../store'
import { getContrastingColor } from '../config/helpers'
// got from chatgpt

const CustomButton = ({type,title,customStyles,handleClick}) => {
  const snap = useSnapshot(state);

  const generateStyle = (type) => {
    if(type === 'filled'){
      return {
        backgroundColor: snap.color,
        color: getContrastingColor(snap.color)
        // switch text between black and white depending on the color
      }
    }else if(type === "outline"){
      return {
       bordeWidth: '1px',
       borderColor: snap.color,
       color: snap.color
      }
  }
}
  return (
    <button
    className={'px-2 py-1.5 flex-1 rounded-md ${customStyles}'}
    style={generateStyle(type)}
    onClick={handleClick}
    >{title}</button>
  )
}

export default CustomButton