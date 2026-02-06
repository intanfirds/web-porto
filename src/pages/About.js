import React from "react";

const About = () => {
  const skills = {
    backend: ["PHP", "Laravel (MVC)", "MySQL", "SQL Server"],
    database: ["ERD Design", "Normalization", "Query Optimization"],
    data: ["Data Analysis", "Data Visualization", "Dashboard"],
    frontend: ["HTML", "CSS", "Bootstrap"],
    tools: ["VS Code", "GitHub", "Figma", "Power BI", "Excel", "Canva"],
  };

  const experiences = [
    {
      period: "2023 – 2025",
      company: "MTs Almaarif 01 Singosari",
      position: "Pembina Pramuka",
      description:
        "Melatih kepemimpinan, komunikasi, dan kerja tim siswa melalui kegiatan rutin dan proyek lapangan.",
    },
    {
      period: "Juni 2025",
      company: "BSDMP Surabaya",
      position: "Associate Data Scientist",
      description:
        "Mengikuti sertifikasi BNSP bidang data science meliputi Python, SQL, analisis data, dan pemodelan data.",
    },
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
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {/* About Section */}
        <section className="section" style={{ padding: "4rem 0" }}>
          <div className="numbered-heading about">About Me</div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: window.innerWidth < 768 ? "1fr" : "3fr 2fr",
              gap: "4rem",
              alignItems: "start",
            }}
          >
            <div>
              <p>
                Halo! Saya <span style={{ color: "var(--green)" }}>Intan Firdausi</span>, mahasiswa
                DIV Sistem Informasi Bisnis di Politeknik Negeri Malang dengan fokus pada
                <span style={{ color: "var(--green)" }}>
                  {" "}
                  pengembangan sistem berbasis Laravel, manajemen database, dan analisis data
                </span>
                .
              </p>

              <p>
                Saya terbiasa membangun sistem informasi berbasis web menggunakan arsitektur MVC,
                mulai dari perancangan database (ERD & normalisasi), pembuatan fitur CRUD,
                autentikasi, hingga pengolahan dan visualisasi data untuk kebutuhan pengambilan
                keputusan.
              </p>

              <p>
                Dalam berbagai proyek kampus, saya berperan sebagai Back-End Developer, Database
                Engineer, dan Project Manager. Saya mengintegrasikan proses bisnis kampus ke dalam
                sistem berbasis Laravel dan SQL Server/MySQL serta membangun dashboard analitik
                sederhana untuk kebutuhan pelaporan.
              </p>

              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.7",
                  color: "var(--slate)",
                }}
              >
                Berikut adalah beberapa teknologi yang saya kuasai:
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: window.innerWidth < 768 ? "1fr" : "repeat(2, 1fr)",
                  gap: "1.5rem",
                  marginTop: "2rem",
                }}
              >
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <h4
                      style={{ color: "var(--green)", fontSize: "0.9rem", marginBottom: "0.5rem" }}
                    >
                      {category.toUpperCase()}
                    </h4>
                    {items.map((skill, index) => (
                      <div
                        key={index}
                        style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
                      >
                        <span style={{ color: "var(--green)", fontSize: "0.8rem" }}>▹</span>
                        <span
                          style={{
                            color: "var(--light-slate)",
                            fontSize: "0.85rem",
                            fontFamily: "SF Mono, Fira Code, monospace",
                          }}
                        >
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Timeline */}
            <div
              className="glass"
              style={{
                padding: "2rem",
                position: "relative",
              }}
            >
              <h3
                style={{
                  color: "var(--lightest-slate)",
                  marginBottom: "2rem",
                  fontSize: "1.3rem",
                }}
              >
                Experience
              </h3>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "2rem",
                }}
              >
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    style={{
                      position: "relative",
                      paddingLeft: "1.5rem",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        left: 0,
                        top: "0.3rem",
                        width: "8px",
                        height: "8px",
                        background: "var(--green)",
                        borderRadius: "50%",
                      }}
                    ></div>

                    <p
                      style={{
                        color: "var(--green)",
                        fontFamily: "SF Mono, Fira Code, monospace",
                        fontSize: "0.8rem",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {exp.period}
                    </p>

                    <h4
                      style={{
                        color: "var(--lightest-slate)",
                        marginBottom: "0.5rem",
                        fontSize: "1.1rem",
                      }}
                    >
                      {exp.position} • {exp.company}
                    </h4>

                    <p
                      style={{
                        color: "var(--light-slate)",
                        fontSize: "0.9rem",
                        lineHeight: "1.6",
                      }}
                    >
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Education & Certifications */}
        <section className="section" style={{ padding: "4rem 0" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "3rem",
            }}
          >
            {/* Education */}
            <div className="glass" style={{ padding: "2rem" }}>
              <h3
                style={{
                  color: "var(--lightest-slate)",
                  marginBottom: "1.5rem",
                  fontSize: "1.3rem",
                }}
              >
                🎓 Education
              </h3>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                }}
              >
                <div>
                  <h4
                    style={{
                      color: "var(--green)",
                      marginBottom: "0.5rem",
                      fontSize: "1rem",
                    }}
                  >
                    D-IV Sistem Informasi Bisnis
                  </h4>
                  <p
                    style={{
                      color: "var(--light-slate)",
                      fontSize: "0.9rem",
                    }}
                  >
                    Politeknik Negeri Malang • 2023 - Now (Sem 6)
                  </p>
                  <p
                    style={{
                      color: "var(--light-slate)",
                      fontSize: "0.9rem",
                    }}
                  >
                    Fokus pada sistem informasi bisnis, analisis sistem, dan pengembangan aplikasi
                    berbasis database serta integrasi proses bisnis.
                  </p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="glass" style={{ padding: "2rem" }}>
              <h3
                style={{
                  color: "var(--lightest-slate)",
                  marginBottom: "1.5rem",
                  fontSize: "1.3rem",
                }}
              >
                📜 Certifications
              </h3>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                {["Associate Data Scientist - BNSP (BSDMP Surabaya)"].map((cert, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <span style={{ color: "var(--green)" }}>✓</span>
                    <span
                      style={{
                        color: "var(--light-slate)",
                        fontSize: "0.9rem",
                      }}
                    >
                      {cert}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
