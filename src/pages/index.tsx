import React from 'react';
import Education from '../components/education/education';
import Footer from '../components/footer/footer';
import Identity from '../components/identity/identity';
import PersonalProject from '../components/projects/personal-projects/personal-projects';
import WorkExperience from '../components/projects/work-experience/work-experience';
import Skills from '../components/skills/skills';
import '../styles/global.scss';
import ThemeToggle from '../components/theme-toggle/theme-toggle';

export default () => (
  <React.Fragment>
    <div id={'mainContainer'}>
      <ThemeToggle/>
      <Identity />
      <hr />
      <Skills />
      <hr />
      <WorkExperience />
      <hr />
      <PersonalProject />
      <hr />
      <Education />
      <hr />
      <Footer />
    </div>
  </React.Fragment>
);
