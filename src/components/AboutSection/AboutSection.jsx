import './AboutSection.css';

function AboutSection() {
  return (
    <section id='about' className='about-section'>
      <div className='about-wrapper container'>
        <div className='about-image'>
          <img src='/profile.jpg' alt='Suleiman' />
        </div>
        <div className='about-copy'>
          <h1>About Me</h1>
          <p>Hi! I'm Suleiman, a Computer Science Engineering student building a strong foundation in programming, problem solving, and core computer science concepts. Focused on learning through hands-on projects and turning ideas into practical, real-world solutions.</p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;