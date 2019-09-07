import React from 'react';
import styles from './skills.module.scss';

const SkillList = ({iterable}) => {
  return (
    <div className={['content', styles.skill].join(' ')}>
      <ul>
        {iterable.map((elem, index) => (
          <li key={index}>{elem.name}</li>
        ))}
      </ul>
    </div>
  )
};

export default SkillList;
