import {faBriefcase} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import moment from 'moment';
import React from 'react';

const WorkExperience = () => (
  <section>
    <h2 className="title is-2">
      <FontAwesomeIcon icon={faBriefcase} color={'#624a2e'}/>{' Work experience'}</h2>
    <div className="timeline is-centered">
      <div className="timeline-item">
        <div className="timeline-marker is-icon">
          <FontAwesomeIcon icon={faBriefcase} color={'#121212'}/>
        </div>
        <div className="timeline-content">
          <p className="heading">{moment("2017-03-01").format("LL")} - present day</p>
          <span className='title is-6'>CONDOR</span>
          <p>
            CONDOR project...
          </p>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-marker is-icon">
          <FontAwesomeIcon icon={faBriefcase} color={'#121212'}/>
        </div>
        <div className="timeline-content">
          <p className="heading">{moment("2016-11-01").format("LL")} - {moment(
            "2017-02-15"
          ).format("LL")}</p>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-marker is-icon">
          <FontAwesomeIcon icon={faBriefcase} color={'#121212'}/>
        </div>
        <div className="timeline-content">
          <p className="heading">{moment("2016-02-01").format("LL")} - {moment(
            "2016-07-15"
          ).format("LL")}</p>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-marker is-icon">
          <FontAwesomeIcon icon={faBriefcase} color={'#121212'}/>
        </div>
        <div className="timeline-content">
          <p className="heading">{moment("2014-09-01").format("LL")} - {moment(
            "2015-02-15"
          ).format("LL")}</p>
        </div>
      </div>
    </div>
  </section>
);

export default WorkExperience;

