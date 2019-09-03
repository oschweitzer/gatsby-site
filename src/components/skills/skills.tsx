import {graphql, useStaticQuery} from 'gatsby';
import React from 'react';
import {FaBrain} from 'react-icons/fa';
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
        <h2 className={"title is-2"}>
          <FaBrain color={"#FF33C7"} />
          {" Skills"}
        </h2>

        <div className={"columns"}>
          <div className={"column"}>
            <h4 className="title is-4">Technologies</h4>
            <div className={["content", styles.skill].join(" ")}>
              <ul>
                {technologies.map((technology, index) => (
                  <li key={index}>{technology.name}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className={["is-divider-vertical", styles.divider].join(" ")} />
          <div className={"column"}>
            <h4 className="title is-4">Communication</h4>
            <div className={["content", styles.skill].join(" ")}>
              <ul>
                {communication.map((communicationSkill, index) => (
                  <li key={index}>{communicationSkill.name}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className={["is-divider-vertical", styles.divider].join(" ")} />
          <div className={"column"}>
            <h4 className="title is-4">Methodology</h4>
            <div className={["content", styles.skill].join(" ")}>
              <ul>
                {methodology.map((methodologySkill, index) => (
                  <li key={index}>{methodologySkill.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Skills;
