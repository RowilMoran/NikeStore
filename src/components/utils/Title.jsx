import React from 'react'

const Title = ({title}) => {
  return (
 <div className='grid items-center'>
    <h3 className='text-5xl lg:text-4xl md:text-3xl text text-slate-900 font-bold  filter drop-shadow-lg '>{title}</h3>
 </div>
  )
}

export default Title