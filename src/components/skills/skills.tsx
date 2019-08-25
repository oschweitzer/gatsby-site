import {faBrain} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';

const Skills = () => (
  <React.Fragment>
    <section>
      <h2 className={"title is-2"}>
        <FontAwesomeIcon icon={faBrain} color={'#FF33C7'}/>{' Skills'}
        </h2>
      <div className={'content'}>
        <ul>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>HTML/CSS</li>
          <li>Python</li>
          <li>NodeJS (ExpressJS, SailsJS, NestJS)</li>
          <li>TypeORM</li>
          <li>Python CherryPy</li>
          <li>PostgreSQL/CouchDB</li>
          <li>Kafka/RabbitMQ</li>
          <li>AngularJS/Angular</li>
          <li>MaterialUI</li>
          <li>NgRx</li>
          <li>Docker/Docker Compose/Docker Swarm</li>
          <li>Gitlab CI</li>

        </ul>
      </div>
    </section>
  </React.Fragment>
);

export default Skills;
