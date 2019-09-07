import React from 'react';
import * as styles from '../personal-projects/personal-projects.module.scss';

const GithubProject = ({repository}) => {
  return (
    <a href={repository.url} style={{ textDecoration: 'none' }} target={'_blank'} rel='noopener'
       aria-label='Links to my Github projects'>
      <div className={[styles.projectCard, 'card'].join(' ')}>
        <div className={'card-header'} >
          <p className='card-header-title' style={{color: 'var(--textNormal)'}}>{repository.name}</p>
        </div>
        <div className={'card-content'} style={{color: 'var(--textNormal)'}}>
          {repository.description}
          <div className={'tags'}>
            {repository.repositoryTopics.nodes.map((topic, topicIndex: number) => (
              <span key={topicIndex} className={[styles.projectChip, 'tag'].join(' ')}>{topic.topic.name}</span>
            ))}
          </div>
        </div>
      </div>
    </a>
  )
};

export default GithubProject;
