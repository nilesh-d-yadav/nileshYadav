import styles from "./ProjectsStyles.module.css";
import parallax from "../../assets/parallax2.jpg";
import lawFirm from "../../assets/lawFirm2.jpg";
import furnitureImg from "../../assets/furnitureImg.jpg";
import billSplit from "../../assets/splitter.jpg";

import ProjectCard from "../../common/ProjectCard";
function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          img={parallax}
          link={"https://parallaxexp.netlify.app/"}
          h3={"Parallax Exp"}
          p={"Movie App"}
        />
        <ProjectCard
          img={lawFirm}
          link={"https://nilesh-d-yadav.github.io/legalEase3/"}
          h3={"LegalEase"}
          p={"Law Firm"}
        />
        <ProjectCard
          img={furnitureImg}
          link={"https://thefurnitureloft.netlify.app/"}
          h3={"The FurnitureLoft"}
          p={"Furniture Shop"}
        />
        <ProjectCard
          img={billSplit}
          link={"https://billbuster.netlify.app/"}
          h3={"Bill Buster"}
          p={"Bill Splitting App"}
        />
      </div>
    </section>
  );
}

export default Projects;
