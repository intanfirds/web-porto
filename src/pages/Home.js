import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Import images
import profileImage from "../assets/images/profile2.jpg";
import bebasTanggunganImage from "../assets/images/bebas_tanggungan.png";
import tracerStudyImage from "../assets/images/tracer_study.png";
import k3FamilymartImage from "../assets/images/k3_familymart.png";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const projects = [
    {
      image: bebasTanggunganImage,
      title: "SISFOR Bebas Tanggungan",
      description:
        "Sistem informasi berbasis web untuk mengelola proses bebas tanggungan mahasiswa. Saya bertanggung jawab pada perancangan database, integrasi backend, dan otomatisasi proses verifikasi administrasi.",
      technologies: ["SQL Server", "JavaScript", "Bootstrap", "PHP"],
      github: "#",
      live: "#",
    },
    {
      image: tracerStudyImage,
      title: "SISFOR Tracer Study",
      description:
        "Sistem tracer alumni berbasis Laravel dan MySQL untuk mengumpulkan, mengelola, dan menganalisis data lulusan. Digunakan sebagai dasar laporan sebaran alumni dan evaluasi kurikulum.",
      technologies: ["Laravel", "MySQL", "Google Charts", "PHP", "EmailJS", "JavaScript"],
      github: "#",
      live: "#",
    },
    {
      image: k3FamilymartImage,
      title: "Web K3 Family Mart",
      description:
        "Sistem manajemen K3 untuk toko ritel yang memusatkan pelaporan dan pemantauan keselamatan kerja. Saat ini dikembangkan menggunakan Laravel dan JavaScript.",
      technologies: ["Laravel", "JavaScript", "PHP"],
      github: "#",
      live: "#",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--deep-navy)",
        color: "var(--slate)",
        paddingTop: isMobile ? "70px" : "80px", // Adjusted for mobile
      }}
    >
      {/* Hero Section */}
      <section
        style={{
          minHeight: isMobile ? "calc(100vh - 70px)" : "100vh",
          display: "flex",
          flexDirection: isMobile ? "column-reverse" : "row",
          alignItems: "center",
          justifyContent: "center",
          padding: isMobile ? "1rem" : "0 2rem",
          maxWidth: "1200px",
          margin: "0 auto",
          gap: isMobile ? "2rem" : "0",
        }}
      >
        <div
          style={{
            maxWidth: "800px",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          <p
            style={{
              color: "var(--green)",
              fontFamily: "SF Mono, Fira Code, monospace",
              marginBottom: "1rem",
              fontSize: isMobile ? "0.9rem" : "1rem",
            }}
          >
            Halo, nama saya
          </p>

          <h1
            style={{
              fontSize: isMobile ? "clamp(2rem, 8vw, 3rem)" : "clamp(3rem, 8vw, 5rem)",
              fontWeight: "700",
              color: "var(--lightest-slate)",
              marginBottom: "0.5rem",
              lineHeight: "1.1",
            }}
          >
            Intan Firdausi
          </h1>

          <h2
            style={{
              fontSize: isMobile ? "clamp(1.5rem, 6vw, 2.5rem)" : "clamp(2.5rem, 6vw, 4rem)",
              fontWeight: "600",
              color: "var(--light-slate)",
              marginBottom: "1.5rem",
              lineHeight: "1.1",
            }}
          >
            Back-End & Data-Driven System Developer
          </h2>
          <p
            style={{
              color: "var(--green)",
              fontFamily: "SF Mono, Fira Code, monospace",
              fontSize: isMobile ? "0.8rem" : "0.9rem",
              marginBottom: "1.5rem",
            }}
          >
            Laravel • Database Design • Business Systems • Data Analytics
          </p>

          <p
            style={{
              fontSize: isMobile ? "1rem" : "1.2rem",
              lineHeight: "1.6",
              maxWidth: isMobile ? "100%" : "540px",
              marginBottom: isMobile ? "2rem" : "3rem",
              color: "var(--slate)",
              marginLeft: isMobile ? "auto" : "0",
              marginRight: isMobile ? "auto" : "0",
            }}
          >
            Saya membangun sistem informasi berbasis Laravel dan database relasional
            untuk mendigitalisasi proses bisnis dan mendukung pengambilan keputusan.
            Berpengalaman dalam perancangan database, pengembangan backend,
            serta analisis dan visualisasi data untuk sistem administrasi dan tracer alumni.
          </p>

          <div
            style={{
              display: "flex",
              gap: "1.5rem",
              flexWrap: "wrap",
              justifyContent: isMobile ? "center" : "flex-start",
            }}
          >
            <Link
              to="/projects"
              className="premium-btn"
              style={{
                fontSize: isMobile ? "0.8rem" : "0.9rem",
                padding: isMobile ? "0.8rem 1.5rem" : "1rem 2rem",
              }}
            >
              Check out my work!
            </Link>

            <a
              href="https://github.com/intanfirds"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-btn"
              style={{
                fontSize: isMobile ? "0.8rem" : "0.9rem",
                padding: isMobile ? "0.8rem 1.5rem" : "1rem 2rem",
              }}
            >
              View GitHub
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: isMobile ? "250px" : "300px",
              height: isMobile ? "250px" : "300px",
              position: "relative",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                background: "linear-gradient(135deg, var(--green) 0%, var(--blue) 100%)",
                padding: "3px",
              }}
            >
              <img
                src={profileImage}
                alt="Profile"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section
        className="section"
        style={{
          background: "var(--light-navy)",
          padding: isMobile ? "3rem 1rem" : "6rem 2rem",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <div
            className="numbered-heading projects"
            style={{
              textAlign: isMobile ? "center" : "left",
              fontSize: isMobile ? "1.3rem" : "1.5rem",
            }}
          >
            Some Things I&apos;ve Built
          </div>

          <div
            style={{
              display: "grid",
              gap: isMobile ? "2rem" : "4rem",
            }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="glass fade-in-up"
                style={{
                  display: "grid",
                  gridTemplateColumns: isMobile ? "1fr" : "repeat(12, 1fr)",
                  gap: isMobile ? "1.5rem" : "2rem",
                  alignItems: "center",
                  padding: isMobile ? "1.5rem" : "2rem",
                }}
              >
                <div
                  style={{
                    gridColumn: isMobile ? "1 / -1" : index % 2 === 0 ? "7 / -1" : "1 / 7",
                    gridRow: isMobile ? "1 / 2" : "1 / -1",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: "100%",
                      height: isMobile ? "200px" : "300px",
                      objectFit: "cover",
                      borderRadius: "10px",
                      boxShadow: "0 10px 30px -15px var(--navy-shadow)",
                    }}
                  />
                </div>

                <div
                  style={{
                    gridColumn: isMobile ? "1 / -1" : index % 2 === 0 ? "1 / 8" : "6 / -1",
                    gridRow: isMobile ? "2 / 3" : "1 / -1",
                    position: "relative",
                    zIndex: 2,
                    textAlign: isMobile ? "center" : index % 2 === 0 ? "left" : "right",
                  }}
                >
                  <p
                    style={{
                      color: "var(--green)",
                      fontFamily: "SF Mono, Fira Code, monospace",
                      fontSize: isMobile ? "0.8rem" : "0.9rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Featured Project
                  </p>

                  <h3
                    style={{
                      fontSize: isMobile ? "1.3rem" : "1.5rem",
                      marginBottom: "1rem",
                      color: "var(--lightest-slate)",
                    }}
                  >
                    {project.title}
                  </h3>

                  <div
                    style={{
                      background: "var(--lightest-navy)",
                      padding: isMobile ? "1rem" : "1.5rem",
                      borderRadius: "5px",
                      marginBottom: "1.5rem",
                      boxShadow: "0 10px 30px -15px var(--navy-shadow)",
                    }}
                  >
                    <p
                      style={{
                        lineHeight: "1.6",
                        color: "var(--light-slate)",
                        fontSize: isMobile ? "0.9rem" : "1rem",
                      }}
                    >
                      {project.description}
                    </p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "1rem",
                      marginBottom: "1.5rem",
                      justifyContent: isMobile
                        ? "center"
                        : index % 2 === 0
                          ? "flex-start"
                          : "flex-end",
                    }}
                  >
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        style={{
                          color: "var(--light-slate)",
                          fontFamily: "SF Mono, Fira Code, monospace",
                          fontSize: isMobile ? "0.7rem" : "0.8rem",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      gap: "1rem",
                      justifyContent: isMobile
                        ? "center"
                        : index % 2 === 0
                          ? "flex-start"
                          : "flex-end",
                    }}
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "var(--lightest-slate)",
                        textDecoration: "none",
                        fontSize: isMobile ? "1.3rem" : "1.5rem",
                      }}
                    >
                      📁
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "var(--lightest-slate)",
                        textDecoration: "none",
                        fontSize: isMobile ? "1.3rem" : "1.5rem",
                      }}
                    >
                      🔗
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              textAlign: "center",
              marginTop: isMobile ? "2rem" : "4rem",
            }}
          >
            <Link
              to="/projects"
              className="premium-btn"
              style={{
                fontSize: isMobile ? "0.8rem" : "0.9rem",
                padding: isMobile ? "0.8rem 1.5rem" : "1rem 2rem",
              }}
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
