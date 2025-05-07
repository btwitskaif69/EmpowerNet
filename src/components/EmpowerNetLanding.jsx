import React from 'react';

const EmpowerNetLanding = () => {
  return (
    <div style={{ fontFamily: 'sans-serif', lineHeight: '1.6' }}>
      {/* Navbar */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 2rem', backgroundColor: '#f5365c', color: '#fff' }}>
        <h1>EmpowerNet</h1>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <a href="#about" style={{ color: '#fff', textDecoration: 'none' }}>About</a>
          <a href="#resources" style={{ color: '#fff', textDecoration: 'none' }}>Resources</a>
          <a href="#stories" style={{ color: '#fff', textDecoration: 'none' }}>Stories</a>
          <a href="#blog" style={{ color: '#fff', textDecoration: 'none' }}>Blog</a>
          <a href="#contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ padding: '4rem 2rem', background: '#ffe9ec', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Empowering Equality Through Technology</h2>
        <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
          EmpowerNet is a collaborative digital platform designed to bridge gender and social gaps. Through accessible education, inclusive resources, and real community stories, we drive forward the mission of SDG 5 and SDG 10.
        </p>
        <button style={{ marginTop: '2rem', padding: '1rem 2rem', background: '#f5365c', color: '#fff', border: 'none', borderRadius: '5px' }}>
          Get Started
        </button>
      </section>

      {/* About Section */}
      <section id="about" style={{ padding: '3rem 2rem', background: '#fff' }}>
        <h3>About EmpowerNet</h3>
        <p>
          EmpowerNet is built to serve as a digital ally in the global fight against inequality. Whether you're a woman in STEM, a marginalized student, or a passionate advocate, our platform offers tools, mentorship, and a community that uplifts your journey.
        </p>
        <ul>
          <li>🌍 Promoting SDG 5: Gender Equality</li>
          <li>⚖️ Supporting SDG 10: Reduced Inequalities</li>
          <li>📚 Free resources, training, and career tools</li>
          <li>🤝 Real stories from people overcoming barriers</li>
        </ul>
      </section>

      {/* Resources Section */}
      <section id="resources" style={{ padding: '3rem 2rem', background: '#f9f9f9' }}>
        <h3>Featured Resources</h3>
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
          <div style={{ background: '#fff', padding: '1rem', borderRadius: '8px', width: '250px' }}>
            <strong>🌐 Women in Tech Bootcamp</strong>
            <p>Free 6-week full-stack program for aspiring developers.</p>
          </div>
          <div style={{ background: '#fff', padding: '1rem', borderRadius: '8px', width: '250px' }}>
            <strong>📘 Inclusive Hiring Guide</strong>
            <p>Toolkit for startups & HR teams building diverse teams.</p>
          </div>
          <div style={{ background: '#fff', padding: '1rem', borderRadius: '8px', width: '250px' }}>
            <strong>🎓 Scholarship Directory</strong>
            <p>Filter scholarships based on country, field, or identity.</p>
          </div>
        </div>
        <button style={{ marginTop: '1.5rem', padding: '0.8rem 1.5rem', background: '#f5365c', color: '#fff', border: 'none', borderRadius: '5px' }}>
          View All Resources
        </button>
      </section>

      {/* User Stories Section */}
      <section id="stories" style={{ padding: '3rem 2rem', background: '#fff' }}>
        <h3>Community Voices</h3>
        <p>Hear from real users who are challenging norms and reshaping their futures through tech and education.</p>
        <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <blockquote style={{ background: '#f1f1f1', padding: '1rem', borderLeft: '5px solid #f5365c' }}>
            “EmpowerNet helped me get my first internship in cybersecurity. I never imagined someone like me could work in tech.” – <em>Fatima, Morocco</em>
          </blockquote>
          <blockquote style={{ background: '#f1f1f1', padding: '1rem', borderLeft: '5px solid #f5365c' }}>
            “The scholarship database helped me find funding to pursue higher education as a trans student in India.” – <em>Arjun, India</em>
          </blockquote>
        </div>
        <button style={{ marginTop: '1.5rem', padding: '0.8rem 1.5rem', background: '#f5365c', color: '#fff', border: 'none', borderRadius: '5px' }}>
          Share Your Story
        </button>
      </section>

      {/* Blog Section */}
      <section id="blog" style={{ padding: '3rem 2rem', background: '#f9f9f9' }}>
        <h3>From Our Blog</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '1rem' }}>
            <strong>🧠 Breaking Bias in Machine Learning</strong>
            <p>How AI systems can be trained with fairness in mind.</p>
          </li>
          <li>
            <strong>🚀 10 Women-Led Startups You Should Know</strong>
            <p>Spotlighting impactful female founders disrupting industries.</p>
          </li>
        </ul>
        <a href="#" style={{ color: '#f5365c', textDecoration: 'underline' }}>Read all blog posts</a>
      </section>

      {/* Contact CTA */}
      <section id="contact" style={{ padding: '3rem 2rem', background: '#ffe9ec', textAlign: 'center' }}>
        <h3>Get Involved</h3>
        <p>Are you an educator, mentor, or activist? Want to support underrepresented voices in tech and education?</p>
        <p>Reach out or join our growing network of contributors, volunteers, and changemakers.</p>
        <button style={{ marginTop: '1rem', padding: '1rem 2rem', background: '#f5365c', color: '#fff', border: 'none', borderRadius: '5px' }}>
          Contact Us
        </button>
      </section>

      {/* Footer */}
      <footer style={{ padding: '2rem', textAlign: 'center', backgroundColor: '#f5365c', color: '#fff' }}>
        <p>&copy; {new Date().getFullYear()} EmpowerNet — Built during GNEC Hackathon 2025</p>
        <p>Made with ❤️ by Team Empower</p>
      </footer>
    </div>
  );
};

export default EmpowerNetLanding;
