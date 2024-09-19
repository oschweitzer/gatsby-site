import React from 'react';

const ProjectSection = ({ text }) => {
  return (
    <h6 className="text-base font-bold" style={{ color: 'var(--textNormal)' }}>
      {text}
    </h6>
  );
};

export default ProjectSection;
