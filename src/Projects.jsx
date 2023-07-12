import React from 'react';
import './css/projects.css';

function Projects() {
  return (
    <>
      <div className="projects-section">
        <h1 className="section-heading"> Projects </h1>

        <div className="projects-boxes">
          <div className="project-box">
            <img src="https://cdn.vox-cdn.com/thumbor/sFp0spZtjdLgZplwyh3Eb_98Ej0=/0x175:2300x1325/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/9871033/Movies_end_of_year_2017.jpg" />
            <div className="project-title"> URL Shortener</div>
            <div className="project-tech"> PHP </div>
          </div>

          <div className="project-box">
            <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/322102294/original/daddf369b5997a94a03c42d23de1e65a2d67c998/design-your-professional-cv-or-resume.jpg" />
            <div className="project-title"> Resume builder </div>
            <div className="project-tech"> ReactJS </div>
          </div>

          <div className="project-box">
            <img src="https://www.androidauthority.com/wp-content/uploads/2021/05/Rocket-Player-screenshot-2022.jpg" />
            <div className="project-title"> Music Player</div>
            <div className="project-tech"> ReactJS </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
