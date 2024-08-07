import "./Timeline.css";

function Timeline() {
  return (
    <section class="design-section">
      <h1 className="sectionTitle">EDUCATION</h1>
      <div class="timeline">
        <div class="timeline-empty"></div>

        <div class="timeline-middle">
          <div class="timeline-circle"></div>
        </div>
        <div class="timeline-component timeline-content">
          <h3>S.S.C (10 CGPA)</h3>
          <p>Atmiya VidyaPeeth [2017]</p>
        </div>
        <div class="timeline-component timeline-content">
          <h3>H.S.C (78.8%)</h3>
          <p>Atmiya VidyaPeeth [2019]</p>
        </div>
        <div class="timeline-middle">
          <div class="timeline-circle"></div>
        </div>
        <div class="timeline-empty"></div>

        <div class="timeline-empty"></div>

        <div class="timeline-middle">
          <div class="timeline-circle"></div>
        </div>
        <div class=" timeline-component timeline-content">
          <h3>B.E. COMPUTER ENGINEERING (9.01 CGPA)</h3>
          <p>Silver Oak College of Engineering & Technology [2023]</p>
        </div>
      </div>
    </section>
  );
}

export default Timeline;
