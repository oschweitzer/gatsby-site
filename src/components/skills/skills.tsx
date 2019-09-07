import {graphql, useStaticQuery} from 'gatsby';
import React from 'react';
import {FaBrain} from 'react-icons/fa';
import SectionTitle from '../titles/section';
import SkillTypeTitle from '../titles/skill-type';
import SkillList from './skill-list';
import styles from './skills.module.scss';

const query = graphql`
  {
    technologies: allContentfulSkill(
      filter: { name: { ne: null }, type: { label: { eq: "Technology" } } }
      sort: { fields: name, order: ASC }
    ) {
      nodes {
        name
        type {
          label
        }
      }
    }
    communication: allContentfulSkill(
      filter: { name: { ne: null }, type: { label: { eq: "Communication" } } }
      sort: { fields: name, order: ASC }
    ) {
      nodes {
        name
        type {
          label
        }
      }
    }
    methodology: allContentfulSkill(
      filter: { name: { ne: null }, type: { label: { eq: "Methodology" } } }
      sort: { fields: name, order: ASC }
    ) {
      nodes {
        name
        type {
          label
        }
      }
    }
  }
`;

const Skills = () => {
  const data = useStaticQuery(query);
  const technologies = data.technologies.nodes;
  const communication = data.communication.nodes;
  const methodology = data.methodology.nodes;
  return (
    <React.Fragment>
      <section>
        <SectionTitle text={' Skills'} children={<FaBrain color={'#FF33C7'} />} />
        <div className={'columns'}>
          <div className={'column'}>
            <SkillTypeTitle text={'Technologies'} />
            <SkillList iterable={technologies}/>
          </div>
          <div className={['is-divider-vertical', styles.divider].join(' ')} />
          <div className={'column'}>
            <SkillTypeTitle text={'Communication'} />
            <SkillList iterable={communication}/>
          </div>
          <div className={['is-divider-vertical', styles.divider].join(' ')} />
          <div className={'column'}>
            <SkillTypeTitle text={'Methodology'} />
            <SkillList iterable={methodology} />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Skills;
