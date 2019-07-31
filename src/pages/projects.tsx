import Container from "@material-ui/core/Container";
import React from "react";
import GithubProjects from "../components/projects/github-projects/github-projects";
import OtherProjects from "../components/projects/other-projects/other-projects";

export default () => (
  <React.Fragment>
    <Container maxWidth="lg">
      <div>
        <h1>Projects</h1>
        <h2>Personal projects</h2>
        <GithubProjects></GithubProjects>
      </div>
    </Container>
    <Container>
      <h2>Work experience</h2>
      <OtherProjects></OtherProjects>
    </Container>
  </React.Fragment>
);
