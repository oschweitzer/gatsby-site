import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { FaBrain } from 'react-icons/fa';
import SectionTitle from '../titles/section';
import SkillTypeTitle from '../titles/skill-type';
import SkillList from './skill-list';
import { groupBy } from '../../common/utils';

interface Skill {
  name: string;
  level: string;
  type: {
    label: string;
    order: number;
  };
}

const query = graphql`
  {
    allContentfulSkill(filter: { name: { ne: null } }) {
      nodes {
        name
        level
        type {
          ... on ContentfulSkillSubType {
            label
            order
          }
          ... on ContentfulSkillType {
            label
            order
          }
        }
      }
    }
  }
`;

const Skills = () => {
  const data = useStaticQuery(query);

  const skills = groupBy(
    data.allContentfulSkill.nodes.filter((item: Skill) => item.type?.label),
    (item: Skill) => item.type.label,
  );
  const sortedSkills = Object.keys(skills)
    .sort((keyA, keyB) => {
      const indexA = skills[keyA]?.[0]?.type?.order;
      const indexB = skills[keyB]?.[0]?.type?.order;
      if (typeof indexA === 'number' && typeof indexB === 'number') {
        return indexA < indexB ? -1 : 1;
      }
      return -1;
    })
    .map((key) => [key, skills[key]])
    .reduce(
      (prev, curr) => {
        if (typeof curr[0] === 'string') {
          if (Array.isArray(curr[1])) {
            prev[curr[0]] = curr[1].sort((itemA, itemB) =>
              parseInt(itemA.level) < parseInt(itemB.level) ? 1 : -1,
            );
          }
        }
        return prev;
      },
      {} as Record<string, any>,
    );

  return (
    <React.Fragment>
      <section>
        <SectionTitle text={' Skills'} children={<FaBrain color={'#FF33C7'} />} />
        <div className={'grid grid-cols-3 gap-8'}>
          {Object.keys(sortedSkills).map((skillKey: string, index) => (
            <div key={skillKey}>
              <SkillTypeTitle text={skillKey} />
              <SkillList iterable={skills[skillKey]} />
            </div>
          ))}
        </div>
      </section>
    </React.Fragment>
  );
};

export default Skills;
