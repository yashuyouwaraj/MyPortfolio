import { WindowControls } from "#components";
import { workExperiences } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";

const WorkExperience = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="workexperience" />
        <h2>Work Experience</h2>
      </div>

      <div className="work-experience-layout">
        {/* Content Area */}
        <div className="work-experience-content">
          {workExperiences && workExperiences.length > 0 ? (
            <div className="work-experience-grid">
              {workExperiences.map((experience) => (
                <div
                  key={experience.id}
                  className="work-experience-card"
                >
                  {/* Header with company and designation */}
                  <div className="work-card-header">
                    <div className="work-card-info">
                      <h4 className="work-company">{experience.company}</h4>
                      <p className="work-designation">{experience.designation}</p>
                    </div>
                  </div>

                  {/* Duration */}
                  <p className="work-duration">{experience.duration}</p>

                  {/* Role Description */}
                  <p className="work-role">{experience.role}</p>

                  {/* Tech Stack Tags */}
                  <div className="work-tech-stack">
                    {experience.tech.map((tech, idx) => (
                      <span key={`${experience.id}_tech_${idx}`} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="work-experience-empty">
              <div className="empty-icon">💼</div>
              <p>No work experiences available</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

const WorkExperienceWindow = WindowWrapper(WorkExperience, "workexperience");

export default WorkExperienceWindow;
