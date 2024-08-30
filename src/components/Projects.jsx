import PropTypes from "prop-types";

const Projects = ({ imageSrc, title, description, githubLink, demoLink }) => {
  return (
    <div className="portfolio-item">
      <div className="image-container">
        <img src={imageSrc} alt={`${title} Screenshot`} />
      </div>
      <div className="description-container">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="buttons-container">
          {githubLink && (
            <a
              href={githubLink}
              className="btn btn-github"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          )}
          {demoLink && (
            <a
              href={demoLink}
              className="btn btn-demo"
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

Projects.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
  demoLink: PropTypes.string,
};

Projects.defaultProps = {
  demoLink: null,
};
export default Projects;
