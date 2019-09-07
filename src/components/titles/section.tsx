import React from 'react';

const SectionTitle = ({children, text}) => {
  return (
    <h2 className='title is-2' style={{color: 'var(--textNormal)'}}>
      {children}
      {text}</h2>
  )
};

export default SectionTitle;
