import React from 'react';
import * as skillsStyles from './skills.module.css';
import { TbChevronRight } from 'react-icons/tb';

const SkillList = ({ iterable }) => {
  return (
    <div className={`${skillsStyles.skill}`}>
      <ul>
        {iterable.map((elem, index) => (
          <li key={index} className={'flex flex-row items-center'}>
            <TbChevronRight />
            {elem.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillList;
