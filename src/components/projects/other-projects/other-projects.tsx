import { Avatar, Icon, SvgIcon } from "@material-ui/core";
import React from "react";
import { Timeline } from "react-material-timeline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import * as ircadLogo from "../../../../static/ircad.png";
import * as ihuLogo from "../../../../static/ihu.jpg";
import * as altranLogo from "../../../../static/altran.svg";
import * as styles from "./other-projects.module.css";
import moment from "moment";

const events = [
  {
    title: (
      <Icon>
        <img className={styles.logo} src={ihuLogo} />
        <span>CONDOR project</span>
      </Icon>
    ),
    subheader: `${moment("2017-03-01").format("LL")} - present day`,
    description: (
      <div>
        <p>
          The aim of the CONDOR project is to develop and deploy under real
          conditions a new worldwide standard of surgical videos. Like in
          aeronautics, this will be translated by the development of a “control
          tower" of operating rooms via new real-time steering, communication,
          recording, exploitation and automatization applications.
        </p>
        <p>
          Website:
          <a href="https://condor-project.eu/">https://condor-project.eu/</a>
        </p>
      </div>
    ),
    icon: (
      <Avatar>
        <FontAwesomeIcon icon={faBriefcase} />
      </Avatar>
    )
  },
  {
    title: (
      <Icon>
        <img className={styles.logo} src={altranLogo} />
        <span>Junior consultant</span>
      </Icon>
    ),
    subheader: `${moment("2016-11-01").format("LL")} - ${moment(
      "2017-02-15"
    ).format("LL")}`,
    description: ["Some description for event 2"],
    icon: (
      <Avatar>
        <FontAwesomeIcon icon={faBriefcase} />
      </Avatar>
    )
  },
  {
    title: (
      <Icon>
        <img className={styles.logo} src={ircadLogo} />
        <span>Internship: Final projet assignement</span>
      </Icon>
    ),
    subheader: `${moment("2016-02-01").format("LL")} - ${moment(
      "2016-07-15"
    ).format("LL")}`,
    description: ["Some description for event 2"],
    icon: (
      <Avatar>
        <FontAwesomeIcon icon={faBriefcase} />
      </Avatar>
    )
  },
  {
    title: (
      <Icon>
        <img className={styles.logo} src={ircadLogo} />
        <span>Internship: Engineer assistant</span>
      </Icon>
    ),
    subheader: `${moment("2014-09-01").format("LL")} - ${moment(
      "2015-02-15"
    ).format("LL")}`,
    description: ["Some description for event 2"],
    icon: (
      <Avatar>
        <FontAwesomeIcon icon={faBriefcase} />
      </Avatar>
    )
  }
];
export default () => <Timeline events={events}></Timeline>;
