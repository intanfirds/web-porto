import React from "react";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const allProjects = [
    {
      id: 1,
      title: "SISFOR Bebas Tanggungan",
      description:
        "Website ini dibuat untuk mempermudah mahasiswa yang akan lulus dalam mengurus surat bebas tanggungan di universitas mereka. Saya berkontribusi sebagai full stack developer dan database designer.",
      longDescription:
        "Website ini menyediakan platform terpusat untuk mengelola dan memantau protokol keselamatan dan kesehatan di jaringan toko Family Mart, memastikan kepatuhan terhadap standar industri dan menciptakan lingkungan yang aman bagi karyawan dan pelanggan.",
      image: "/src/assets/images/bebas_tanggungan.png",
      technologies: ["PHP", "SQL Server", "JavaScript", "Bootstrap", "PHP"],
      githubUrl: "https://github.com/intanfirds/Empati-Bebas-Tanggungan",
      liveUrl: "https://drive.google.com/file/d/1_emwg36BbBlYU9RmNOcexjazXBM1u7l4/view?usp=sharing",
      category: "Full Stack",
      featured: true,
    },
    {
      id: 2,
      title: "SISFOR Tracer Study",
      description:
        "Website ini membantu universitas dalam melacak dan menganalisis data lulusan mereka. Saya berkontribusi sebagai project manager dan back end developer.",
      longDescription:
        "Website ini menyediakan platform terpusat untuk mengelola dan memantau protokol keselamatan dan kesehatan di jaringan toko Family Mart, memastikan kepatuhan terhadap standar industri dan menciptakan lingkungan yang aman bagi karyawan dan pelanggan.",
      image: "/src/assets/images/tracer_study.png",
      technologies: ["Laravel", "MySQL", "Google Charts", "PHP", "EmailJS", "JavaScript"],
      githubUrl: "https://github.com/intanfirds/tracer_study",
      liveUrl: "https://vercel-deploy-tracer-landing.vercel.app/",
      category: "Data Analytics",
      featured: true,
    },
    {
      id: 3,
      title: "Web K3 Family Mart",
      description:
        "Website ini dibuat untuk mempermudah manajemen K3 di jaringan toko Family Mart. Saya berkontribusi sebagai front end developer (in progress).",
      longDescription:
        "This safety management system ensures compliance with occupational health and safety regulations. It features incident reporting, safety checklist automation, training module management, and real-time safety alerts for store managers and regional supervisors.",
      image: "/src/assets/images/k3_familymart.png",
      technologies: ["Laravel", "JavaScript", "PHP"],
      githubUrl: "https://github.com/intanfirds/websiteK3",
      category: "Frontend",
      featured: true,
    },
  ];

  const categories = [
    "Backend",
    "Frontend",
    "Full Stack",
    "Project Management",
    "Data Analytics",
    "Data Visualization",
    "Database Design",
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--deep-navy)",
        color: "var(--slate)",
        padding: "100px 2rem 2rem 2rem",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Header Section */}
        <section style={{ padding: "4rem 0" }}>
          <div className="numbered-heading projects">My Projects</div>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.7",
              maxWidth: "600px",
              marginBottom: "3rem",
              color: "var(--slate)",
            }}
          >
            Ini adalah daftar proyek yang saya kerjakan. Setiap proyek mewakili masalah dan
            kesempatan untuk membuat sesuatu yang berarti yang berguna menggunakan teknologi modern
            dan praktik terbaik.
          </p>

          {/* Project Stats */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "2rem",
              marginBottom: "4rem",
            }}
          >
            <div
              className="glass"
              style={{
                padding: "1.5rem",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                  color: "var(--green)",
                  marginBottom: "0.5rem",
                }}
              >
                {allProjects.length}
              </div>
              <div style={{ color: "var(--light-slate)" }}>Projects Completed</div>
            </div>

            <div
              className="glass"
              style={{
                padding: "1.5rem",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                  color: "var(--green)",
                  marginBottom: "0.5rem",
                }}
              >
                2+
              </div>
              <div style={{ color: "var(--light-slate)" }}>Years Experience</div>
            </div>

            <div
              className="glass"
              style={{
                padding: "1.5rem",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                  color: "var(--green)",
                  marginBottom: "0.5rem",
                }}
              >
                15+
              </div>
              <div style={{ color: "var(--light-slate)" }}>Technologies</div>
            </div>
          </div>

          {/* Category Filters */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              marginBottom: "3rem",
            }}
          >
            <div>Peran yang pernah saya kerjakan:</div>
            {categories.map((category) => (
              <button
                key={category}
                className="secondary-btn"
                style={{
                  padding: "0.8rem 1.5rem",
                  fontSize: "0.9rem",
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Projects Grid */}
        <section style={{ padding: "2rem 0" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "2rem",
            }}
          >
            {allProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section
          style={{
            textAlign: "center",
            padding: "6rem 0",
          }}
        >
          <h2
            style={{
              fontSize: "2rem",
              color: "var(--lightest-slate)",
              marginBottom: "1rem",
            }}
          >
            Tertarik untuk bekerja sama?
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              color: "var(--slate)",
              marginBottom: "2rem",
              maxWidth: "500px",
              margin: "0 auto 2rem auto",
            }}
          >
            Jangan ragu untuk menghubungi saya untuk mendiskusikan proyek Anda atau hanya untuk
            mengatakan halo!
          </p>
          <a href="mailto:intanfir27@gmail.com" className="premium-btn">
            Get In Touch
          </a>
        </section>
      </div>
    </div>
  );
};

export default Projects;
