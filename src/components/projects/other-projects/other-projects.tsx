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

/* const events = [
  {
    title: (
      <Icon>
        <img classNameName={styles.logo} src={ihuLogo} />
        <span>CONDOR project</span>
      </Icon>
    ),
    subheader: `${moment("2017-03-01").format("LL")} - present day`,
    description: (
      <article>
        <h4>Context</h4>
        <p classNameName={styles.projectDescription}>
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

        <h4>Skills</h4>
        <p>
          <ul>
            <li>Project management & coordination</li>
            <li>Demos & presentation</li>
            <li>Agile software development (SCRUM, Kanban)</li>
            <li>Organizational skills</li>
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
        <img classNameName={styles.logo} src={altranLogo} />
        <span>Junior consultant</span>
      </Icon>
    ),
    subheader: `${moment("2016-11-01").format("LL")} - ${moment(
      "2017-02-15"
    ).format("LL")}`,
    description: (
      <article>
        <h4>Context</h4>
        <p classNameName={styles.projectDescription}>
          Altran is a global leader in Engineering and R&D services. I worked as
          junior consultant for the IRCAD IT team and for the Altran R&D
          service.
        </p>
        <h4>Assignements</h4>
        <h5>
          Development of an interface to facilitate new user account creation
        </h5>
        <p classNameName={styles.projectDescription}>
          Using AngularJS framework, the goal was to create a web application
          that allow the IT team to easily create LDAP, entry pass access and
          NetApp configuration for new users. I also add to develop the web API
          to communicate with the LDAP server using Python.
        </p>
        <h5>
          Development of an PaaS (Platform as a Service) application to compute
          scientific algorithm on medical images
        </h5>
        <p classNameName={styles.projectDescription}>
          The goal of this project was to develop a PaaS application that allow
          users to send their algorithm files and their medical images through a
          web interface. These data will then be computed (in Docker containers)
          and the results will be displayed on the interface.
        </p>
        <h4>Technologies</h4>
        <ul>
          <li>JavaScript</li>
          <li>NodeJS</li>
          <li>Kue</li>
          <li>AngularJS</li>
          <li>Python</li>
          <li>PassportJS, LDAP</li>
        </ul>
        <h4>Skills</h4>
        <ul>
          <li>Independent work</li>
          <li>Creative force</li>
        </ul>
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
        <img classNameName={styles.logo} src={ircadLogo} />
        <span>Internship: Final projet assignement</span>
      </Icon>
    ),
    subheader: `${moment("2016-02-01").format("LL")} - ${moment(
      "2016-07-15"
    ).format("LL")}`,
    description: (
      <article>
        <h4>Context</h4>
        <p classNameName={styles.projectDescription}>
          The goal of this assignement was to use the{" "}
          <a href="https://github.com/IRCAD-IHU/sight">FW4SPL framework</a> for
          the web. To do that I used Emscripten, a compilation toolchain
          allowing to compile C++/C into JavaScript. I managed to compile a
          client side medical images anonymization tool using the DCMTK library
          compiled in JavaScript.
        </p>
        <h4>Technologies</h4>
        <ul>
          <li>Emscripten</li>
          <li>JavaScript</li>
          <li>CMake</li>
          <li>C++</li>
          <li>DICOM</li>
        </ul>
        <h4>Skills</h4>
        <ul>
          <li>Independent work</li>
          <li>Project presentation</li>
          <li>Project report writing</li>
        </ul>
        <h4>Links</h4>
        <ul>
          <li>
            <a href="https://www.slideshare.net/slideshow/embed_code/key/JRIWGEUHLhQspJ">
              Slides of the presentation
            </a>
          </li>
        </ul>
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
        <img classNameName={styles.logo} src={ircadLogo} />
        <span>Internship: Engineer assistant</span>
      </Icon>
    ),
    subheader: `${moment("2014-09-01").format("LL")} - ${moment(
      "2015-02-15"
    ).format("LL")}`,
    description: (
      <article>
        <h4>Context</h4>
        <p classNameName={styles.projectDescription}>
          The goal of this assignement was to develop a web viewing tool for
          medical data. This tool allows to display DICOM images (medical
          images) and 3D models of organs and to inteact with them.
        </p>
        <h4>Technologies</h4>
        <ul>
          <li>HTML/CSS</li>
          <li>JavaScript (jQuery)</li>
          <li>WebGL</li>
          <li>DICOM</li>
        </ul>
        <h4>Skills</h4>
        <ul>
          <li>State of the art report of WebGL framework</li>
          <li>Project presentation</li>
          <li>Project report writing</li>
        </ul>
        <h4>Links</h4>
        <ul>
          <li>
            <a href="https://www.slideshare.net/slideshow/embed_code/key/at8zPYUPAfnGGE">
              Slides of the presentation
            </a>
          </li>
        </ul>
      </article>
    ),
    icon: (
      <Avatar>
        <FontAwesomeIcon icon={faBriefcase} />
      </Avatar>
    )
  }
]; */
export default () => (
<div className="timeline">
  <div className="timeline-item">
    <div className="timeline-marker"></div>
    <div className="timeline-content">
      <p className="heading">{moment("2017-03-01").format("LL")} - present day</p>
    </div>
  </div>
  <div className="timeline-item">
    <div className="timeline-marker">
    </div>
    <div className="timeline-content">
      <p className="heading">{moment("2016-11-01").format("LL")} - {moment(
      "2017-02-15"
    ).format("LL")}</p>
    </div>
  </div>
  <div className="timeline-item">
    <div className="timeline-marker">
    </div>
    <div className="timeline-content">
      <p className="heading">{moment("2016-02-01").format("LL")} - {moment(
      "2016-07-15"
    ).format("LL")}</p>
    </div>
  </div>
  <div className="timeline-item">
    <div className="timeline-marker">
    </div>
    <div className="timeline-content">
      <p className="heading">{moment("2014-09-01").format("LL")} - {moment(
  "2015-02-15"
).format("LL")}</p>
    </div>
  </div>
</div>

);



