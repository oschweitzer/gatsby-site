import React from 'react';
import Education from '../components/education/education';
import Footer from '../components/footer/footer';
import Identity from '../components/identity/identity';
import PersonalProject from '../components/projects/personal-projects/personal-projects';
import WorkExperience from '../components/projects/work-experience/work-experience';
import Skills from '../components/skills/skills';
import ThemeToggle from '../components/theme-toggle/theme-toggle';
import '../styles/global.css';

class Application extends React.Component {
  render() {
    return (
      <div className="">
        <React.Fragment>
          <div id={'mainContainer'}>
            <ThemeToggle />
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
      </div>
    );
  }
}

export default Application;

export const Head = () => (
  <>
    <meta name="Description" content="Olivier Schweitzer profile website" />
    <meta charSet="utf-8" />
    <title>Olivier Schweitzer website</title>
    <html lang="en" />
  </>
);
