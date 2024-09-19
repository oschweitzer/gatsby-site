import React from 'react';

const SkillTypeTitle = ({ text }) => {
  return (
    <h4 className="font-bold text-xl mb-2" style={{ color: 'var(--textNormal)' }}>
      {text}
    </h4>
  );
};

export default SkillTypeTitle;
