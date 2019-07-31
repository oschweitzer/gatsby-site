import React from "react";
import GithubProjects from "../components/projects/github-projects/github-projects";
import OtherProjects from "../components/projects/other-projects/other-projects";
import { Divider } from "@material-ui/core";
import * as styles from "./projects.module.css";

export default () => (
  <div>
    <h1>Projects</h1>
    <h2>Personal projects</h2>
    <GithubProjects></GithubProjects>
    <Divider className={styles.divider}></Divider>
    <h2>Work experience</h2>
    <OtherProjects></OtherProjects>
  </div>
);
