import React from "react";

const About = () => {
  const skills = {
    frontend: ["HTML", "CSS", "JavaScript"],
    backend: ["PHP", "Laravel"],
    tools: [
      "Git & GitHub",
      "MySQL",
      "SQL Server",
      "Google Colab",
      "Postman",
      "XAMPP",
      "Visual Studio Code",
      "Laragon",
    ],
  };

  const experiences = [
    {
      period: "Juni 2025",
      company: "BSDMP Surabaya",
      position: "Associate Data Scientist",
      description:
        "Mengikuti program sertifikasi data scientist yang mencakup pembelajaran Python, SQL, dan alat analisis data lainnya.",
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
              gridTemplateColumns: "3fr 2fr",
              gap: "4rem",
              alignItems: "start",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.7",
                  marginBottom: "2rem",
                  color: "var(--slate)",
                }}
              >
                Halo! Saya <span style={{ color: "var(--green)" }}>Intan Firdausi</span>, seorang
                Developer Back End & Associate Data Analyst dengan lebih dari{" "}
                <span style={{ color: "var(--green)" }}>2 tahun</span> dalam mengembangkan diri.
              </p>

              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.7",
                  marginBottom: "2rem",
                  color: "var(--slate)",
                }}
              >
                Saya bersemangat menekuni teknologi modern dan mengembangkan aplikasi web yang
                efisien. Percobaan saya dalam teknologi mulai saat saya menemukan kegembiraan saya
                untuk menyelesaikan masalah dengan menggunakan kode, dan sekarang, saya sedang
                belajar dan berkembang dalam pengembangan back end serta analisis data.
              </p>

              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.7",
                  marginBottom: "2rem",
                  color: "var(--slate)",
                }}
              >
                Saat ini, saya fokus pengembangan diri pada back end dengan database seperti MongoDB
                dan MySQL. Saya juga memiliki pengalaman dalam analisis data menggunakan Python dan
                SQL. Saya senang bekerja dalam tim yang kolaboratif dan dinamis, serta selalu
                bersemangat untuk belajar hal-hal baru.
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
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "1rem",
                  marginTop: "2rem",
                }}
              >
                {skills.tools.map((skill, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <span
                      style={{
                        color: "var(--green)",
                        fontSize: "0.8rem",
                      }}
                    >
                      ▹
                    </span>
                    <span
                      style={{
                        color: "var(--light-slate)",
                        fontSize: "0.9rem",
                        fontFamily: "SF Mono, Fira Code, monospace",
                      }}
                    >
                      {skill}
                    </span>
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
                    Sistem Informasi • DIV
                  </h4>
                  <p
                    style={{
                      color: "var(--light-slate)",
                      fontSize: "0.9rem",
                    }}
                  >
                    Politeknik Negeri Malang • 2023 - Now
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
                {["Associate Data Scientist - BSDMP Surabaya (BNSP - Komdigi)"].map(
                  (cert, index) => (
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
                  )
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
