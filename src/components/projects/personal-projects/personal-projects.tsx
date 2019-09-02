import {graphql, useStaticQuery} from 'gatsby';
import React from 'react';
import {FaHome} from 'react-icons/fa';
import * as styles from './personal-projects.module.scss';

const query = graphql`
  {
    github {
      viewer {
        repositories(
          first: 50
          privacy: PUBLIC
          isFork: false
          ownerAffiliations: OWNER
          orderBy: { field: NAME, direction: ASC }
        ) {
          nodes {
            name
            description
            url
            repositoryTopics(first: 20) {
              nodes {
                topic {
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`;

const PersonalProject = () => {
  const data = useStaticQuery(query);
  return (
    <React.Fragment>
      <section className={styles.personalProjects}>
        <h2 className={"title is-2"}>
          <FaHome color={"#D6B4A7"} />
          {" Personal projects"}
        </h2>
        <div className="columns is-multiline">
          {data.github.viewer.repositories.nodes.map((repo, index: number) => (
            <div key={index} className="column is-one-third">
              <a href={repo.url} style={{ textDecoration: "none" }}>
                <div className={[styles.projectCard, "card"].join(" ")}>
                  <div className={"card-header"}>
                    <p className="card-header-title">{repo.name}</p>
                  </div>
                  <div className={"card-content"}>
                    {repo.description}
                    <div className={"tags"}>
                      {repo.repositoryTopics.nodes.map((topic, topicIndex: number) => (
                        <span
                          key={topicIndex}
                          className={[styles.projectChip, "tag"].join(" ")}
                        >
                          {topic.topic.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>
    </React.Fragment>
  );
};

export default PersonalProject;
