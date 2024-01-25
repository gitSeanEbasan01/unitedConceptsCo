import { useEffect } from "react";


const handleEffects = () => {
  const ucnName = document.querySelector('.ucn-name');
  const ucnSectionContainer = document.querySelector('.ucn-section-container');

  const uciImage = document.querySelectorAll('.uci-image');
  const uciTitleDescription = document.querySelector('.uci-title-description');
  const uciBackground = document.querySelector('.uci-background');

  ucnName.classList.add('open');
  ucnSectionContainer.classList.add('open');

  for(const img of uciImage) {
    img.classList.add('open');
  }
  uciTitleDescription.classList.add('open');
  uciBackground.style.backgroundPosition = '100% 50%';
}

const handleViewport = () => {
  const ucwTitleDescription = document.querySelector('.ucw-title-description');
  const ucwDivider = document.querySelector('.ucw-divider');
  const ucwCards = document.querySelector('.ucw-cards');

  const observer = new IntersectionObserver((entries) => {
    for(const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('observed');
        observer.unobserve(entry.target);
      }
    }
  }, {
    rootMargin: '-100px'
  })

  observer.observe(ucwTitleDescription);
  observer.observe(ucwDivider);
  observer.observe(ucwCards);
}

function App() {

  let content = (
    <main>

      <nav className="uc-navigation">
        <h3 className="ucn-name">United Concepts</h3>
        <div className="ucn-section-container">
          <a href="#uc-work-section" className="work-link">WORK</a>
          <a href="#uc-services-section" className="services-link">SERVICES</a>
          <a href="#uc-team-section" className="team-link">TEAM</a>
          <a href="#uc-philosophy-section" className="philosophy-link">PHILOSOPHY</a>
          <a href="#uc-portfolio-section" className="portfolio-link">PORTFOLIO</a>
          <a href="#uc-contact-section" className="contact-link">CONTACT</a>
        </div>
      </nav>

      <section className="uc-intro">
        <div className="uci-title-description">
          <h1 className="title">A Full-Service Marketing Agency</h1>
          <div className="line"></div>
          <p className="description">we truly think of everything</p>
        </div>

        <div className="uci-image img0"></div>
        <div className="uci-image img1"></div>
        <div className="uci-image img2"></div>
        <div className="uci-image img3"></div>
        <div className="uci-image img4"></div>
        <div className="uci-image img5"></div>
        <div className="uci-image img-small6"></div>
        <div className="uci-image img-small7"></div>

        <div className="uci-background"></div>
        <div className="diagonal-separator"></div>
      </section>

      <section id="uc-work-section">
        <div className="ucw-title-description">
          <h2>What we are passionate about</h2>
          <p>is where we can help you</p>
        </div>
        <div className="ucw-divider">
          <div className="left-line"></div>
          <div className="mid-circle"></div>
          <div className="right-line"></div>
        </div>
        <div className="ucw-cards">
          <div className="left-card">
            <h3>ART OF STRATEGY</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quos nam maxime labore eos deleniti? Quae obcaecati praesentium laudantium, a esse beatae atque, vel odit neque facere, harum nemo illum.</p>
            <button>LEARN MORE</button>
          </div>
          <div className="mid-card">
            <h3>AWARD WINNING MARKETING</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quos nam maxime labore eos deleniti? Quae obcaecati praesentium laudantium, a esse beatae atque, vel odit neque facere, harum nemo illum.</p>
            <button>LEARN MORE</button>
          </div>
          <div className="right-card">
            <h3>DESIGN PRODUCTION</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quos nam maxime labore eos deleniti? Quae obcaecati praesentium laudantium, a esse beatae atque, vel odit neque facere, harum nemo illum.</p>
            <button>LEARN MORE</button>
          </div>
        </div>
      </section>

      <section id="uc-services-section">
        <div className="ucs-title-description">
          <h2>What we are passionate about</h2>
          <p>is where we can help you</p>
        </div>
        <div className="ucs-divider">
          <div className="left-line"></div>
          <div className="mid-circle"></div>
          <div className="right-line"></div>
        </div>
        <div className="ucs-cards">
          <div className="first-row-cards">
            <div className="card-container">
              <h4>Advertising</h4>
              <p>make your event visible</p>
            </div>
            <div className="card-container">
              <h4>Brand Design</h4>
              <p>make your brand stand out</p>
            </div>
            <div className="card-container">
              <h4>Event Planning</h4>
              <p>plan an awesome event</p>
            </div>
          </div>
          <div className="second-row-cards">
            <div className="card-container">
              <h4>Location Scouting</h4>
              <p>because finding the best spot is important</p>
            </div>
            <div className="card-container">
              <h4>Social Media</h4>
              <p>use the power of viral marketing</p>
            </div>
            <div className="card-container">
              <h4>Event Analysis</h4>
              <p>post event data analysis</p>
            </div>
          </div>
        </div>

        <div className="diagonal-separator"></div>
      </section>
      
    </main>
  )


  useEffect(() => {
    handleEffects();
    handleViewport();
  }, [])

  
  return content;
}

export default App;
