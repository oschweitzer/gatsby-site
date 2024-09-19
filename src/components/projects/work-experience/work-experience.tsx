import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import parse from 'html-react-parser';

import { FaBriefcase, FaCheckCircle } from 'react-icons/fa';
import { arrayTo2DArray2 } from '../../../common/utils';
import ProjectSection from '../../titles/project-section';
import SectionTitle from '../../titles/section';
import { DateTime } from 'luxon';
import * as workExpStyles from './work-experience.module.css';
import { TbChevronRight } from 'react-icons/tb';

const query = graphql`
  {
    allContentfulWorkExperience(filter: { title: { ne: null } }, sort: { startDate: DESC }) {
      nodes {
        company
        title
        references
        context {
          context
        }
        endDate
        startDate
        skills {
          name
        }
        missions {
          title
          details {
            details
          }
        }
      }
    }
  }
`;

const WorkExperience = () => {
  const data = useStaticQuery(query).allContentfulWorkExperience.nodes;
  return (
    <section>
      <SectionTitle children={<FaBriefcase color={'#624a2e'} />} text={' Work experience'} />
      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
        {data.map((workExperience, index: number) => (
          <div
            key={index}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 ${workExpStyles.timelineDot}`}></div>
            <div
              className={`w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-2xl shadow ${workExpStyles.experienceCard}`}>
              <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-bold">
                  {workExperience.title} - {workExperience.company}
                </div>
                <time className={`font-caveat font-medium ${workExpStyles.textDate}`}>
                  {DateTime.fromISO(workExperience.startDate).toFormat('LLL yyyy')} -{' '}
                  {workExperience?.endDate
                    ? DateTime.fromISO(workExperience.endDate).toFormat('LLL yyyy')
                    : 'Today'}
                </time>
              </div>
              <div>
                <div className={'flex flex-col gap-2 my-6'}>
                  <ProjectSection text={'Context'} />
                  <div className={`${workExpStyles.projectDescription}`}>
                    {parse(workExperience.context.context)}
                  </div>
                </div>
                <div className={'flex flex-col gap-2 my-6'}>
                  <ProjectSection text={'Missions'} />
                  <div className={`${workExpStyles.projectMissions}`}>
                    <ul className={'max-w-md space-y-1 list-outside'}>
                      {workExperience.missions.map((mission, idx: number) => (
                        <li key={idx} className={'flex items-baseline'}>
                          <svg
                            className={`w-3.5 h-3.5 me-2 flex-shrink-0 ${workExpStyles.bulletIcon}`}
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                          </svg>
                          {mission.details.details}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <ProjectSection text={'Skills'} />
                <div className={`grid grid-cols-2`}>
                  {arrayTo2DArray2(
                    workExperience.skills,
                    Math.floor(workExperience.skills.length / 2),
                  ).map((skills, idx: number) => (
                    <div key={idx}>
                      {skills.map((skill, skillIndex: number) => (
                        <span
                          key={skillIndex}
                          className={`${workExpStyles.skill} flex items-baseline`}>
                          <TbChevronRight /> {skill.name}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
