import React from "react";
import "../style/Home.css";
import SEO from './SEO';

const GalleryStats = () => {
  return (
    <>
      <SEO
        title="Top IT Talent Solutions & Custom Software Services"
        description="Empower your business with top-tier remote IT talent, custom software development, and expert cloud and AI engineering. Start your transformation today."
        canonicalUrl="https://www.theittalent.com/"
      />
      <section className="gallery-stats-section">
        <div className="container">
          <div className="gallery-wrapper">

            <div className="gallery-item small">
              <img src="/images/gallery1.jpg" alt="Team Work" />
              <div className="overlays">
                <div className="overlay-content">
                  <h3>6k</h3>
                  <p>Project Done</p>
                </div>
              </div>
            </div>

            <div className="gallery-item big">
              <img src="/images/gallery2.jpg" alt="Happy Customers" />
              <div className="overlays">
                <div className="overlay-content">
                  <h3>6k</h3>
                  <p>Happy Customers</p>
                </div>
              </div>
            </div>

            <div className="gallery-item small">
              <img src="/images/gallery3.jpg" alt="Guaranteed Results" />
              <div className="overlays">
                <div className="overlay-content">
                  <h3>100%</h3>
                  <p>Result Guaranteed</p>
                </div>
              </div>
            </div>

            <div id="gallery-hide-item" className="gallery-item small">
              <img src="/images/gallery4.jpg" alt="Projects Completed" />
              <div className="overlays">
                <div className="overlay-content">
                  <h3></h3>
                  <p></p>
                </div>
              </div>
            </div>

            <div id="gallery-hide-item" className="gallery-item small">
              <img src="/images/gallery5.jpg" alt="Innovation" />
              <div className="overlays">
                <div className="overlay-content">
                  <h3></h3>
                  <p></p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default GalleryStats;