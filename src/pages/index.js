import React from 'react';

import Layout from '../components/Layout';
import Contact from '../components/Contact';
import Sidebar from '../components/Sidebar';
import config from '../../config';
import { Thumbnail } from '../components/Thumbnail';
import Icon from '../components/Icon';


const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {config.address} · {config.phone} ·
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
            {config.about}
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          {config.experience.map(experience => {
            const { title, company, description, date } = experience;
            return (
              <div key={company + date} className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="resume-content">
                  <h3 className="mb-0">{title}</h3>
                  <div className="subheading mb-3">{company}</div>
                  <p dangerouslySetInnerHTML={{ __html: description }} />
                </div>
                <div className="resume-date text-md-right">
                  <span className="text-primary">{date}</span>
                </div>
              </div>
            );
          })}

        </div>
      </section>

      <hr className="m-0" />

     {config.pages.education && (
        <section
          className="resume-section p-3 p-lg-5 d-flex align-items-center"
          id="education"
        >
          <div className="w-100">
            <h2 className="mb-5">Education</h2>

            {config.education.map(education => {
              const { name, title, description, info, date } = education;
              return (
                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                  <div className="resume-content">
                    <h3 className="mb-0">{name}</h3>
                    <div className="subheading mb-3">{title}</div>
                    {description && <div>{description}</div>}
                    {info && <p>{info}</p>}
                  </div>
                  <div className="resume-date text-md-right">
                    <span className="text-primary">{date}</span>
                  </div>
                </div>
              );
            })}

          </div>
        </section>
     )}

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Programming Languages
          </div>
          <ul className="list-inline dev-icons">
            {config.languages.map(language => {
              const { icon, name, type, short } = language;
              return (
                <li className="list-inline-item">
                  <Icon icon={icon} name={name} type={type} short={short} />
                </li>
              );
            })}
          </ul>

          <div className="subheading mb-3">
            Tools
          </div>
          <ul className="list-inline dev-icons">
            {config.tools.map(tool => {
              const { icon, name } = tool;
              return (
                <li className="list-inline-item">
                  <i className={`fab ${icon}`}></i>
                  <p className="list-inline-item-text">{name}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="projects"
      >
        <div className="w-100">
          <h2 className="mb-5">Projects</h2>

          {config.projects.map(project => {
            const { title, link, description, thumbnail, skills } = project;

            return (
              <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="resume-content">
                  <h3 className="mb-0">{title}</h3>
                  <div className="subheading mb-3">{link}</div>
                  <p>
                    {description}
                  </p>
                  <ul className="list-inline dev-icons">
                    {skills.map(skill => {
                      const { icon, name, type, short } = skill;
                      return (
                        <li className="list-inline-item">
                          <Icon icon={icon} name={name} type={type} short={short} />
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="text-md-right">
                  <Thumbnail src={thumbnail} />
                </div>
              </div>
            );
          })}

        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="contact"
      >
        <div className="w-100">
          <h2 className="mb-5">Contact</h2>
          <Contact />
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
