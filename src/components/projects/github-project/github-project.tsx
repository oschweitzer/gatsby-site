import React from 'react';
import * as styles from '../personal-projects/personal-projects.module.css';

const GithubProject = ({ repository }) => {
  return (
    <a
      href={repository.url}
      style={{ textDecoration: 'none' }}
      target={'_blank'}
      rel="noopener"
      aria-label="Links to my Github projects">
      <div className={`${styles.projectCard} p-4 justify-center rounded-2xl`}>
        <div className={'font-bold mb-2'}>
          <p className="" style={{ color: 'var(--textNormal)' }}>
            {repository.name}
          </p>
        </div>
        <div className={'italic text-sm'} style={{ color: 'var(--textNormal)' }}>
          {repository.description}
          <div className={'grid-cols-3 grid gap-2 mt-4'}>
            {repository.repositoryTopics.nodes.map((topic, topicIndex: number) => (
              <span
                key={topicIndex}
                className={`not-italic rounded-2xl py-0.5 px-2.5 border border-transparent text-sm text-white transition-all shadow-sm ${styles.chip}`}>
                {topic.topic.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

export default GithubProject;
