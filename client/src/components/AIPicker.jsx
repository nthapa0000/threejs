import React from 'react'
import CustomButton from './CustomButton'


const AIPicker = ({prompt,setPrompt,generatingImg,handleSubmit}) => {
  return (
    <div className='aipicker-container'>
      <textarea 
      className='aipicker-textarea'
      placeholder='Ask Ai....'
      rows={5}
      value={prompt}
      onChange={(e) => setPrompt(e.target.value)}
    />
    <div className='flex flex-wrap gap-3'>
      {generatingImg ? (
        <CustomButton
          type='outling'
          title='Asking Ai...'
          customStyles="text-xs"
          
        />
      ):(
        <>
        <CustomButton
          type='outling'
          title='AI logo'
          handleClick={() => handleSubmit('logo')}
          customStyles="text-xs"
        />
        <CustomButton
          type='filled'
          title='AI Full'
          handleClick={() => handleSubmit('full')}
          customStyles="text-xs"
        />
        </>
      )}
    </div>
    </div>
  )
}

export default AIPicker