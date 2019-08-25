import React from 'react';
import Education from '../components/education/education';
import Footer from '../components/footer/footer';
import Identity from '../components/identity/identity';
import PersonalProject from '../components/projects/personal-projects/personal-projects';
import WorkExperience from '../components/projects/work-experience/work-experience';
import Skills from '../components/skills/skills';
import '../styles/global.scss';

export default () => (
  <React.Fragment>
    <Identity/>
    <hr/>
    <Skills/>
    <hr/>
    <WorkExperience/>
    <hr/>
    <PersonalProject/>
    <hr/>
    <Education/>
    <hr/>
    <Footer/>
  </React.Fragment>
);
