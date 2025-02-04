import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./projects.css";

const ProjectPage = () => {
  const { id } = useParams(); // Get project ID from URL
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const fetchProject = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/projects/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch project details");
        }
        const data = await response.json();
        setProject(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]); // Refetch when ID changes

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!project) return <div>Project not found</div>;

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
          <p>{project.features}</p>
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
        <Link to="/" className="home-button">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ProjectPage;
