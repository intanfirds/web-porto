import React from "react";

const Contact = () => {
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
        {/* Header Section */}
        <section style={{ padding: "4rem 0" }}>
          <div className="numbered-heading contact">Get In Touch</div>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.7",
              maxWidth: "600px",
              marginBottom: "3rem",
              color: "var(--slate)",
            }}
          >
            Saya sedang bekerja untuk freelance dan pekerjaan penuh waktu. Apakah Anda memiliki
            proyek yang ingin saya bantu? Saya akan sangat senang mendengarkan Anda!
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "3rem",
            }}
          >
            {/* Contact Information */}
            <div>
              <h3
                style={{
                  color: "var(--lightest-slate)",
                  marginBottom: "2rem",
                  fontSize: "1.5rem",
                }}
              >
                Let&apos;s talk
              </h3>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "2rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      background: "var(--green-tint)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--green)",
                      fontSize: "1.2rem",
                    }}
                  >
                    📧
                  </div>
                  <div>
                    <div
                      style={{
                        color: "var(--lightest-slate)",
                        fontWeight: "500",
                        marginBottom: "0.3rem",
                      }}
                    >
                      Email
                    </div>
                    <a
                      href="mailto:intanfir27@gmail.com"
                      style={{
                        color: "var(--green)",
                        textDecoration: "none",
                        fontFamily: "SF Mono, Fira Code, monospace",
                        fontSize: "0.9rem",
                      }}
                    >
                      intanfir27@gmail.com
                    </a>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      background: "var(--green-tint)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--green)",
                      fontSize: "1.2rem",
                    }}
                  >
                    📱
                  </div>
                  <div>
                    <div
                      style={{
                        color: "var(--lightest-slate)",
                        fontWeight: "500",
                        marginBottom: "0.3rem",
                      }}
                    >
                      Phone
                    </div>
                    <div
                      style={{
                        color: "var(--green)",
                        fontFamily: "SF Mono, Fira Code, monospace",
                        fontSize: "0.9rem",
                      }}
                    >
                      +62 857-0656-7078
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      background: "var(--green-tint)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--green)",
                      fontSize: "1.2rem",
                    }}
                  >
                    📍
                  </div>
                  <div>
                    <div
                      style={{
                        color: "var(--lightest-slate)",
                        fontWeight: "500",
                        marginBottom: "0.3rem",
                      }}
                    >
                      Location
                    </div>
                    <div
                      style={{
                        color: "var(--green)",
                        fontFamily: "SF Mono, Fira Code, monospace",
                        fontSize: "0.9rem",
                      }}
                    >
                      Malang, Jawa Timur, Indonesia
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div
                style={{
                  marginTop: "3rem",
                }}
              >
                <h4
                  style={{
                    color: "var(--lightest-slate)",
                    marginBottom: "1rem",
                  }}
                >
                  Penghubung lainnya
                </h4>
                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                  }}
                >
                  {[
                    {
                      name: "GitHub",
                      url: "https://github.com/intanfirds",
                      icon: "🐱",
                    },
                    {
                      name: "LinkedIn",
                      url: "https://www.linkedin.com/in/intan-firdausi-4979272b4",
                      icon: "💼",
                    },
                    {
                      name: "Instagram",
                      url: "https://www.instagram.com/intanfrdss?igsh=MXFoaW9sNW5qMnJ0Ng==",
                      icon: "📷",
                    },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        width: "50px",
                        height: "50px",
                        background: "var(--green-tint)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--green)",
                        textDecoration: "none",
                        fontSize: "1.2rem",
                        transition: "all 0.25s ease",
                      }}
                      onMouseOver={(e) => {
                        e.target.style.background = "var(--green)";
                        e.target.style.color = "var(--deep-navy)";
                        e.target.style.transform = "translateY(-3px)";
                      }}
                      onMouseOut={(e) => {
                        e.target.style.background = "var(--green-tint)";
                        e.target.style.color = "var(--green)";
                        e.target.style.transform = "translateY(0)";
                      }}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Information Card */}
            <div
              className="glass"
              style={{
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <h3
                style={{
                  color: "var(--lightest-slate)",
                  marginBottom: "1.5rem",
                  fontSize: "1.5rem",
                  textAlign: "center",
                }}
              >
                Siap bekerja sama?
              </h3>

              <p
                style={{
                  color: "var(--light-slate)",
                  lineHeight: "1.6",
                  marginBottom: "2rem",
                  textAlign: "center",
                }}
              >
                Saya terbuka untuk peluang freelance dan pekerjaan penuh waktu. Jangan ragu untuk
                menghubungi saya melalui email atau WhatsApp.
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <a
                  href="mailto:intanfir27@gmail.com"
                  className="premium-btn"
                  style={{
                    textAlign: "center",
                    textDecoration: "none",
                  }}
                >
                  📧 Send Email
                </a>

                <a
                  href="https://wa.me/6285706567078"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="secondary-btn"
                  style={{
                    textAlign: "center",
                    textDecoration: "none",
                  }}
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
