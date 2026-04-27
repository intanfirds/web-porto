import React from "react";

const About = () => {
  const skills = {
    "Back-End": ["Laravel (MVC, Blade, Eloquent ORM)", "PHP"],
    Database: ["MySQL", "SQL Server", "ERD & Normalisasi", "Query Optimization"],
    "Data & BI": ["Power BI", "Data Analysis", "Data Visualization", "Excel"],
    Frontend: ["HTML", "CSS", "Bootstrap"],
    Mobile: ["Flutter", "Dart"],
    Tools: ["VS Code", "GitHub", "Figma", "Canva"],
  };

  const experiences = [
    {
      period: "Nov 2025 – Des 2025",
      company: "Proyek Kelompok",
      position: "Full Stack Mobile Developer (Flutter)",
      description:
        "Mengembangkan fitur laporan seluruh letter karyawan pada aplikasi mobile HRIS berbasis Flutter. Mengerjakan front-end (UI Flutter/Dart), back-end (logika bisnis), dan desain database untuk modul letter.",
    },
    {
      period: "Mar 2025 – Jun 2025",
      company: "Proyek Kampus",
      position: "Project Manager & Back-End Developer",
      description:
        "Memimpin pengembangan Sistem Informasi Tracer Study menggunakan Laravel dan MySQL. Membangun dashboard grafik sebaran alumni, autentikasi pengguna, dan mengelola pembagian tugas tim.",
    },
    {
      period: "Sep 2024 – Des 2024",
      company: "Proyek Kampus",
      position: "Full Stack Developer & Database Engineer",
      description:
        "Mengembangkan Sistem Informasi Bebas Tanggungan menggunakan Bootstrap, PHP, dan SQL Server. Mendesain ERD, membangun fitur upload dokumen, dan otomasi alur verifikasi administrasi.",
    },
    {
      period: "2023 – 2025",
      company: "MTs Almaarif 01 Singosari",
      position: "Pembina Pramuka",
      description:
        "Melatih kepemimpinan, komunikasi, dan kerja tim siswa melalui kegiatan rutin dan proyek lapangan.",
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
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
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
                Halo! Saya{" "}
                <span style={{ color: "var(--green)" }}>Intan Firdausi</span>, mahasiswa semester 6
                D-IV Sistem Informasi Bisnis di Politeknik Negeri Malang. Saya sedang mencari{" "}
                <span style={{ color: "var(--green)" }}>kesempatan magang</span> di bidang
                back-end development, database, atau data analytics.
              </p>

              <p>
                Keahlian utama saya mencakup{" "}
                <span style={{ color: "var(--green)" }}>
                  pengembangan back-end menggunakan Laravel & PHP
                </span>
                , perancangan database relasional (ERD & normalisasi), serta pengolahan dan
                visualisasi data menggunakan Power BI. Tersertifikasi{" "}
                <span style={{ color: "var(--green)" }}>Associate Data Scientist</span> melalui
                program Digital Talent Scholarship Komdigi 2025.
              </p>

              <p>
                Dalam berbagai proyek, saya berperan sebagai Back-End Developer, Database Engineer,
                Project Manager, hingga Full Stack Mobile Developer (Flutter). Saya terbiasa
                mengintegrasikan proses bisnis ke dalam sistem berbasis Laravel dan SQL
                Server/MySQL, membangun dashboard analitik, serta menerapkan algoritma rekomendasi
                untuk kebutuhan data-driven decision making.
              </p>

              <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "var(--slate)" }}>
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
                      style={{
                        color: "var(--green)",
                        fontSize: "0.9rem",
                        marginBottom: "0.5rem",
                      }}
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
            <div className="glass" style={{ padding: "2rem", position: "relative" }}>
              <h3
                style={{
                  color: "var(--lightest-slate)",
                  marginBottom: "2rem",
                  fontSize: "1.3rem",
                }}
              >
                Experience
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                {experiences.map((exp, index) => (
                  <div key={index} style={{ position: "relative", paddingLeft: "1.5rem" }}>
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
                        fontSize: "1rem",
                      }}
                    >
                      {exp.position} • {exp.company}
                    </h4>

                    <p
                      style={{
                        color: "var(--light-slate)",
                        fontSize: "0.85rem",
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
              gridTemplateColumns: window.innerWidth < 768 ? "1fr" : "repeat(2, 1fr)",
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

              <div>
                <h4 style={{ color: "var(--green)", marginBottom: "0.5rem", fontSize: "1rem" }}>
                  D-IV Sistem Informasi Bisnis
                </h4>
                <p style={{ color: "var(--light-slate)", fontSize: "0.9rem", marginBottom: "0.3rem" }}>
                  Politeknik Negeri Malang • 2023 – Sekarang (Semester 6)
                </p>
                <p style={{ color: "var(--light-slate)", fontSize: "0.9rem" }}>
                  Fokus pada sistem informasi bisnis, analisis sistem, pengembangan aplikasi
                  berbasis database, dan integrasi proses bisnis ke dalam solusi teknologi.
                </p>
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

              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  {
                    title: "Associate Data Scientist — VSGA",
                    issuer: "Digital Talent Scholarship (DTS) — Komdigi • 2025",
                  },
                ].map((cert, index) => (
                  <div key={index}>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                      <span style={{ color: "var(--green)", marginTop: "2px" }}>✓</span>
                      <div>
                        <span
                          style={{ color: "var(--light-slate)", fontSize: "0.9rem", display: "block" }}
                        >
                          {cert.title}
                        </span>
                        <span
                          style={{
                            color: "var(--slate)",
                            fontSize: "0.8rem",
                            fontFamily: "SF Mono, Fira Code, monospace",
                          }}
                        >
                          {cert.issuer}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bidang Keahlian */}
          <div className="glass" style={{ padding: "2rem", marginTop: "3rem" }}>
            <h3
              style={{
                color: "var(--lightest-slate)",
                marginBottom: "1.5rem",
                fontSize: "1.3rem",
              }}
            >
              🎯 Bidang Keahlian
            </h3>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.75rem",
              }}
            >
              {[
                "Back End Programmer",
                "Database Administrator",
                "Data Analyst",
                "Data Scientist",
                "BI Developer",
                "System Analyst",
              ].map((bidang, index) => (
                <span
                  key={index}
                  style={{
                    border: "1px solid var(--green)",
                    color: "var(--green)",
                    padding: "0.4rem 1rem",
                    borderRadius: "20px",
                    fontSize: "0.85rem",
                    fontFamily: "SF Mono, Fira Code, monospace",
                  }}
                >
                  {bidang}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;