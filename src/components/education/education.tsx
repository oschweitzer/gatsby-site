import { graphql, useStaticQuery } from 'gatsby';
import moment from 'moment';
import React from 'react';
import { FaArrowAltCircleRight, FaGraduationCap } from 'react-icons/fa';
import SectionTitle from '../titles/section';
import * as educationStyles from './education.module.css';
import { DateTime } from 'luxon';

const query = graphql`
  {
    allContentfulEducation(filter: { degree: { ne: null } }, sort: { endDate: DESC }) {
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
  }
`;

const Education = () => {
  const data = useStaticQuery(query).allContentfulEducation.nodes;
  return (
    <section>
      <SectionTitle text={' Education'} children={<FaGraduationCap color={'black'} />} />
      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
        {data.map((education, index: number) => (
          <div
            key={index}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 ${educationStyles.timelineDot}`}></div>
            <div
              className={`w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-2xl shadow ${educationStyles.educationCard}`}>
              <time className={`flex justify-end font-medium ${educationStyles.textDate}`}>
                {DateTime.fromISO(education.startDate).toFormat('LLL yyyy')} -{' '}
                {DateTime.fromISO(education.endDate).toFormat('LLL yyyy')}
              </time>
              <div className={`${educationStyles.university} font-bold mt-4`}>
                {education.degree} - {education.university}
              </div>
              <div className={`${educationStyles.subject} mt-4`}>
                <ul className={'max-w-md space-y-1 list-outside'}>
                  {education.subjects &&
                    education.subjects.map((subject, idx: number) => (
                      <li key={idx} className={'flex items-baseline gap-2'}>
                        <span>
                          <FaArrowAltCircleRight className={`${educationStyles.bulletIcon}`} />
                        </span>
                        {subject.description.description}
                      </li>
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
