import React from 'react';

const SectionTitle = ({children, text}) => {
  return (
    <h2 className='title is-2 level-left' style={{color: 'var(--textNormal)'}}>
      <span className={'level-left'} style={{marginRight: '10px'}}>{children}</span>
      {text}</h2>
  )
};

export default SectionTitle;
