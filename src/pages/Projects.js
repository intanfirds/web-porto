import React from "react";
import ProjectCard from "../components/ProjectCard";

// Import images
import bebasTanggunganImage from "../assets/images/bebas_tanggungan.png";
import tracerStudyImage from "../assets/images/tracer_study.png";
import k3FamilymartImage from "../assets/images/k3_familymart.png";
import hrisImage from "../assets/images/hris.jpeg";
import filmImage from "../assets/images/film.png";

const Projects = () => {
  const allProjects = [
    {
      id: 1,
      title: "SISFOR Bebas Tanggungan",
      description:
        "Sistem informasi untuk proses bebas tanggungan mahasiswa. Bertanggung jawab pada backend, database design (ERD & normalisasi), fitur upload & verifikasi dokumen, dan otomasi alur approval administrasi.",
      longDescription:
        "Sistem web yang dikembangkan untuk mengelola proses bebas tanggungan mahasiswa secara digital. Mencakup perancangan database relasional lengkap, fitur upload dokumen dengan validasi, alur approval bertingkat (diterima/ditolak), dan integrasi backend dengan antarmuka pengguna agar proses administrasi berjalan otomatis dan transparan.",
      image: bebasTanggunganImage,
      technologies: ["PHP", "SQL Server", "Bootstrap", "JavaScript"],
      githubUrl: "https://github.com/intanfirds/Empati-Bebas-Tanggungan",
      liveUrl: "https://drive.google.com/file/d/1_emwg36BbBlYU9RmNOcexjazXBM1u7l4/view?usp=sharing",
      category: "Full Stack Web",
      featured: true,
      period: "Sep 2024 – Des 2024",
    },
    {
      id: 2,
      title: "SISFOR Tracer Study",
      description:
        "Sistem tracer alumni berbasis Laravel & MySQL. Berperan sebagai Project Manager & Back-End Developer, membangun dashboard grafik sebaran alumni (profesi, instansi, masa tunggu kerja) dan autentikasi pengguna.",
      longDescription:
        "Aplikasi web yang dikembangkan untuk mengumpulkan, mengelola, dan menganalisis data alumni. Menggunakan Eloquent ORM & Controller Laravel untuk mengelola logika bisnis dan relasi data. Fitur utama: autentikasi pengguna, form input alumni, dashboard grafik interaktif, dan laporan sebaran alumni untuk evaluasi kurikulum.",
      image: tracerStudyImage,
      technologies: ["Laravel", "MySQL", "Google Charts", "PHP", "EmailJS", "JavaScript"],
      githubUrl: "https://github.com/intanfirds/tracer_study",
      liveUrl: "https://vercel-deploy-tracer-landing.vercel.app/",
      category: "Back End & Data Analytics",
      featured: true,
      period: "Mar 2025 – Jun 2025",
    },
    {
      id: 3,
      title: "Web K3 Family Mart",
      description:
        "Sistem K3 untuk manajemen keselamatan toko ritel Family Mart. Berkontribusi pada data preparation dan pengolahan data untuk kebutuhan pengembangan sistem K3.",
      longDescription:
        "Website yang memusatkan pelaporan dan pemantauan keselamatan dan kesehatan kerja di jaringan toko Family Mart. Berkontribusi dalam penyiapan dan pengolahan data untuk kebutuhan pengembangan sistem, memastikan kepatuhan terhadap standar K3 industri ritel.",
      image: k3FamilymartImage,
      technologies: ["Laravel", "JavaScript", "PHP"],
      githubUrl: "https://github.com/intanfirds/websiteK3",
      liveUrl: null,
      category: "Data Preparation",
      featured: true,
      period: "Sep 2025 – Okt 2025",
    },
    {
      id: 4,
      title: "Aplikasi Mobile HRIS — Modul Letter",
      description:
        "Fitur laporan seluruh letter karyawan dan Fitur Balasan pada aplikasi mobile HRIS berbasis Flutter. Mengerjakan front-end (UI Flutter/Dart), back-end (logika bisnis), dan desain database untuk modul letter.",
      longDescription:
        "Modul letter pada aplikasi mobile HRIS yang dikembangkan dalam proyek kelompok menggunakan Flutter. Mencakup pengelolaan dan pelaporan berbagai jenis surat karyawan dalam lingkungan perusahaan. Mengerjakan keseluruhan stack: UI/UX Flutter/Dart, logika bisnis back-end, dan perancangan skema database untuk modul.",
      image: hrisImage,
      technologies: ["Flutter", "Dart"],
      githubUrl: "https://github.com/Huseinfa/pbl",
      liveUrl: null,
      category: "Full Stack Mobile",
      featured: false,
      period: "Nov 2025 – Des 2025",
    },
    {
      id: 5,
      title: "Sistem Rekomendasi Film (Masih dalam pengembangan)",
      description:
        "Website sistem rekomendasi film menggunakan pendekatan hybrid: Content-Based Filtering (CBF), Naïve Bayes, dan Simple Additive Weighting (SAW). Bertanggung jawab pada back-end dan pengolahan data.",
      longDescription:
        "Sistem rekomendasi film yang menggabungkan tiga metode untuk menghasilkan rekomendasi yang lebih akurat. Content-Based Filtering untuk kemiripan konten, Naïve Bayes (Teorem Bayes) untuk probabilitas preferensi pengguna, dan Simple Additive Weighting (SAW) untuk pembobotan kriteria. Bertanggung jawab pada pengembangan back-end dan implementasi ketiga algoritma rekomendasi.",
      image: filmImage,
      technologies: ["PHP", "JavaScript", "MySQL", "CBF", "Naïve Bayes", "SAW"],
      githubUrl: null,
      liveUrl: null,
      category: "-",
      featured: false,
      period: "Mar 2025 – Sekarang",
    },
  ];

  const categories = [
    "Back-End Developer",
    "Database Engineer",
    "Project Manager",
    "Full Stack Developer",
    "Mobile Developer (Flutter)",
    "Data Analyst",
    "BI Developer",
    "System Analyst",
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
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
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
            Sistem informasi, aplikasi mobile, dan proyek data yang saya bangun sebagai
            Back-End Developer, Database Engineer, Project Manager, dan Full Stack Mobile Developer.
            Setiap proyek berfokus pada penyelesaian masalah bisnis menggunakan Laravel, database
            relasional, Flutter, dan analisis data.
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
            <div className="glass" style={{ padding: "1.5rem", textAlign: "center" }}>
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

            <div className="glass" style={{ padding: "1.5rem", textAlign: "center" }}>
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

            <div className="glass" style={{ padding: "1.5rem", textAlign: "center" }}>
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

          {/* Role Badges */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "3rem" }}>
            <div
              style={{
                color: "var(--light-slate)",
                fontSize: "0.9rem",
                alignSelf: "center",
                marginRight: "0.5rem",
              }}
            >
              Peran yang pernah saya kerjakan:
            </div>
            {categories.map((category) => (
              <span
                key={category}
                style={{
                  border: "1px solid var(--green)",
                  color: "var(--green)",
                  padding: "0.4rem 1rem",
                  borderRadius: "20px",
                  fontSize: "0.8rem",
                  fontFamily: "SF Mono, Fira Code, monospace",
                }}
              >
                {category}
              </span>
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
        <section style={{ textAlign: "center", padding: "6rem 0" }}>
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
            Saya sedang mencari kesempatan magang. Jangan ragu untuk menghubungi saya untuk
            mendiskusikan proyek atau peluang kolaborasi!
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