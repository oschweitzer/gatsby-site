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
      <article>
        <h4>Context</h4>
        <p className={styles.projectDescription}>
          The aim of the CONDOR project is to develop new computer technology
          systems to significantly help surgical teams avoid human errors in the
          operating room. The project includes collaborations with academic
          institutions and leading industrial companies, and proposes a range of
          major technical innovations. These include the first open DICOM
          standard for surgical video storage and transmission, low-latency
          video data transmission, the creation of surgical ontologies,
          pre-operative and real-time intra-operative medical data
          visualization, Artificial Intelligence (AI) systems for surgical video
          analysis, and software tools to permit training these AI systems.
          CONDOR is also inspired by the aviation industry, where we imagine
          creating a "control tower" and a "black box" that will respectively
          monitor and record everything that happens inside an operating room
          and during a surgical procedure, including surgical complications.
          Here we present CONDOR and the first pre-clinical results.
        </p>
        <h4>Technologies</h4>
        <p>
          <h5>Web</h5>
          <ul>
            <li>JavaScript/TypeScript</li>
            <li>Python 2.7 & 3.x</li>
            <li>RxJS</li>
          </ul>
          <h6>Backend</h6>

          <ul>
            <li>NodeJS (ExpressJS, SailsJS, NestJS)</li>
            <li>TypeORM</li>
            <li>Python CherryPy</li>
            <li>PostgreSQL/CouchDB</li>
            <li>Kafka/RabbitMQ</li>
          </ul>

          <h6>Frontend</h6>

          <ul>
            <li>HTML5/CSS/SCSS (Bootstrap)</li>
            <li>AngularJS/Angular</li>
            <li>MaterialUI</li>
            <li>NgRx</li>
          </ul>

          <h5>DevOps</h5>

          <ul>
            <li>Docker/Docker Compose/Docker Swarm</li>
            <li>Gitlab CI</li>
          </ul>

          <h5>Medical</h5>

          <ul>
            <li>HL7</li>
            <li>DICOM (Odil, DCMTK)</li>
            <li>DICOM Worklist (DCM4CHE)</li>
            <li>PACS Orthanc</li>
          </ul>

          <h5>Video</h5>
          <ul>
            <li>MPEG Dash, HLS, CMAF</li>
            <li>ffmpeg</li>
          </ul>
        </p>

        <h4>Links</h4>
        <p>
          <ul>
            <li>
              <a href="https://condor-project.eu/">
                https://condor-project.eu/
              </a>
            </li>
            <li>
              <a href="https://www.tf1.fr/tf1/jt-we/videos/a-quoi-ressemblera-bloc-operatoire-de-demain.html">
                Report about the CONDOR project on TF1
              </a>
            </li>
          </ul>
        </p>
      </article>
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
