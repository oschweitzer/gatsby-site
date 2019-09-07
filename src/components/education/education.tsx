import {graphql, useStaticQuery} from 'gatsby';
import moment from 'moment';
import React from 'react';
import {FaArrowAltCircleRight, FaGraduationCap} from 'react-icons/fa';
import SectionTitle from '../titles/section';
import styles from './education.module.scss';

const query = graphql`
{
  allContentfulEducation(filter: {degree: {ne: null}}, sort: {fields: endDate, order: DESC}) {
    nodes {
      degree
      description {
        description
      }
      endDate
      university
      startDate
      subjects {
        description {
          description
        }
      }
    }
  }
}`;

const Education = () => {
  const data = useStaticQuery(query).allContentfulEducation.nodes;
  return (
    <section>
      <SectionTitle text={' Education'} children={<FaGraduationCap color={'black'} />}/>
      <div className='timeline is-centered'>
        {data.map((education, index: number) => (
          <div key={index} className='timeline-item'>
            <div className='timeline-marker is-image is-24x24' />
            <div className='timeline-content'>
              <p className='heading'>
                <i>
                  {moment(education.startDate).format('LL')} -{' '}
                  {moment(education.endDate).format('LL')}
                </i>
              </p>
              <span className={[styles.university, 'title is-6'].join(' ')}>
                {education.degree} - {education.university}
              </span>
              <div className={styles.subject}>
                <ul className={'fa-ul'}>
                  {(education.subjects) && education.subjects.map((subject, idx: number) => (
                    <li key={idx}>
                    <span className={'fa-li'}><FaArrowAltCircleRight color={'#4caf50'} />
                    </span>{subject.description.description}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
