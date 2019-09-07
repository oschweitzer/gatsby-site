import {graphql, useStaticQuery} from 'gatsby';
import * as moment from 'moment';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import {FaBriefcase} from 'react-icons/fa';
import {arrayTo2DArray2} from '../../../common/utils';
import ProjectSection from '../../titles/project-section';
import SectionTitle from '../../titles/section';
import styles from './work-experience.module.scss';

const query = graphql`
  {
    allContentfulWorkExperience(
      filter: { title: { ne: null } }
      sort: { fields: startDate, order: DESC }
    ) {
      nodes {
        company
        title
        references
        context {
          context
        }
        mission {
          mission
        }
        endDate
        startDate
        skills {
          name
        }
      }
    }
  }
`;

const WorkExperience = () => {
  const data = useStaticQuery(query).allContentfulWorkExperience.nodes;
  return (
    <section>
      <SectionTitle children={<FaBriefcase color={"#624a2e"} />} text={" Work experience"} />
      <div className="timeline is-centered">
        {data.map((workExperience, index: number) => (
          <div key={index} className="timeline-item">
            <div className="timeline-marker is-image is-24x24" />
            <div className="timeline-content">
              <p className="heading">
                <i>
                  {moment(workExperience.startDate).format("LL")} -{" "}
                  {moment(workExperience.endDate).format("LL")}
                </i>
              </p>
              <span className={["title is-6", styles.company].join(" ")}>
                {workExperience.title} - {workExperience.company}
              </span>
              <ProjectSection text={"Context"} />
              <div className={[styles.projectDescription, "content"].join(" ")}>
                {ReactHtmlParser(workExperience.context.context)}
              </div>
              <br />
              <ProjectSection text={"Missions"} />
              <div className={[styles.projectMissions, "content"].join(" ")}>
                {ReactHtmlParser(workExperience.mission.mission)}
              </div>
              <ProjectSection text={"Skills"} />
              <br />
              <div className={styles.row}>
                {arrayTo2DArray2(
                  workExperience.skills,
                  Math.floor(workExperience.skills.length / 2)
                ).map((skills, idx: number) => (
                  <div key={idx} className={[styles.skills, ""].join(" ")}>
                    {skills.map((skill, skillIndex: number) => (
                      <span key={skillIndex} className={styles.skill}>
                        {skill.name}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
