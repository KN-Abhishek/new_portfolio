import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./projects.css";

const ProjectPage2 = () => {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    fetch(`http://localhost:8080/api/projects/2`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch project details");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched project data:", data);
        setProject(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div id="project-page" className="project-page">
      <h1 className="fade-in">{project.name}</h1>
      <br />
      <div className="project-details">
        <section>
          <h2>Description</h2>
          <p>{project.description}</p>
        </section>

        <section>
          <h2>Technologies</h2>
          <p>{project.technologies}</p>
        </section>

        <section>
          <h2>Features</h2>
          <p>
            {(project.features )}
          </p>
        </section>

        <section>
          <h2>Applications</h2>
          <p>{project.applications}</p>
        </section>

        <section>
          <h2>Benefits</h2>
          <p>{project.benefits}</p>
        </section>

        <section>
          <h2>Conclusion</h2>
          <p>{project.conclusion}</p>
        </section>
      </div>

      <br />
      <div className="home-link">
        <Link to="/projects" className="home-button">
          Back to Projects
        </Link>
      </div>
    </div>
  );
};

export default ProjectPage2;
