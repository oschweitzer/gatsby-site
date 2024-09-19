import React from 'react';

const SectionTitle = ({ children, text }) => {
  return (
    <h2
      className="font-bold text-2xl flex flex-row items-center mb-8"
      style={{ color: 'var(--textNormal)' }}>
      <span className={''} style={{ marginRight: '10px' }}>
        {children}
      </span>
      {text}
    </h2>
  );
};

export default SectionTitle;
