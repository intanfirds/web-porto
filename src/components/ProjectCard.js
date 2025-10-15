import React from "react";
import PropTypes from "prop-types";

// Import images
import bebasTanggunganImage from "../assets/images/bebas_tanggungan.png";
import tracerStudyImage from "../assets/images/tracer_study.png";
import k3FamilymartImage from "../assets/images/k3_familymart.png";

const ProjectCard = ({ project }) => {
  const getProjectImage = (title) => {
    switch (title) {
      case "SISFOR Bebas Tanggungan":
        return bebasTanggunganImage;
      case "SISFOR Tracer Study":
        return tracerStudyImage;
      case "Web K3 Family Mart":
        return k3FamilymartImage;
      default:
        return bebasTanggunganImage;
    }
  };

  return (
    <div
      className="glass"
      style={{
        borderRadius: "10px",
        overflow: "hidden",
        transition: "all 0.25s ease",
        border: "1px solid var(--lightest-navy)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          position: "relative",
          overflow: "hidden",
        }}
      >
        <img
          src={getProjectImage(project.title)}
          alt={project.title}
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            transition: "transform 0.25s ease",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            background: "var(--green)",
            color: "var(--deep-navy)",
            padding: "0.3rem 0.8rem",
            borderRadius: "3px",
            fontSize: "0.7rem",
            fontWeight: "bold",
            fontFamily: "SF Mono, Fira Code, monospace",
          }}
        >
          {project.category}
        </div>
      </div>

      <div
        style={{
          padding: "1.5rem",
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h3
          style={{
            fontSize: "1.3rem",
            marginBottom: "1rem",
            color: "var(--lightest-slate)",
          }}
        >
          {project.title}
        </h3>

        <p
          style={{
            color: "var(--light-slate)",
            lineHeight: "1.6",
            marginBottom: "1.5rem",
            flex: 1,
            fontSize: "0.95rem",
          }}
        >
          {project.description}
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
            marginBottom: "1.5rem",
          }}
        >
          {project.technologies.slice(0, 4).map((tech, index) => (
            <span
              key={index}
              style={{
                color: "var(--green)",
                fontFamily: "SF Mono, Fira Code, monospace",
                fontSize: "0.7rem",
                background: "var(--green-tint)",
                padding: "0.3rem 0.6rem",
                borderRadius: "3px",
              }}
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span
              style={{
                color: "var(--slate)",
                fontFamily: "SF Mono, Fira Code, monospace",
                fontSize: "0.7rem",
              }}
            >
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            marginTop: "auto",
          }}
        >
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-btn"
            style={{
              padding: "0.7rem 1.2rem",
              fontSize: "0.8rem",
              textDecoration: "none",
              flex: 1,
              textAlign: "center",
            }}
          >
            View Code
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="premium-btn"
            style={{
              padding: "0.7rem 1.2rem",
              fontSize: "0.8rem",
              textDecoration: "none",
              flex: 1,
              textAlign: "center",
            }}
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    githubUrl: PropTypes.string.isRequired,
    liveUrl: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    featured: PropTypes.bool,
  }).isRequired,
};

export default ProjectCard;
