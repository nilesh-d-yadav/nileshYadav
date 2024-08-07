import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/portfolioFace.jpg";

import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitter_light from "../../assets/twitter-light.svg";
import twitter_dark from "../../assets/twitter-dark.svg";
import github_light from "../../assets/github-light.svg";
import github_dark from "../../assets/github-dark.svg";
import linkedin_light from "../../assets/linkedin-light.svg";
import linkedin_dark from "../../assets/linkedin-dark.svg";

import CV from "../../assets/resume.pdf";
import { useTheme } from "../../common/ThemeContext.jsx";

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitter_light : twitter_dark;
  const githubIcon = theme === "light" ? github_light : github_dark;
  const linkedInIcon = theme === "light" ? linkedin_light : linkedin_dark;

  return (
    <section id="hero" className={styles.container}>
      <div className="styles.colorModeContainer">
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile picture of Nilesh Yadav"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="dark/mode/light/mode"
          onClick={toggleTheme}
        />
      </div>
      {/* --------------------------------------------------------------- */}
      <div className={styles.info}>
        <h1>
          Nilesh <br />
          Yadav
        </h1>
        <h2>React Developer</h2>
        <span>
          <a
            href="https://wa.me/918780214516?text=Thank%20you%20for%20contacting%20me%20and%20i%20am%20excited%20to%20connect%20with%20you."
            target="_blank"
          >
            <img src={twitterIcon} alt="Twitter Icon" />
          </a>
          <a href="https://github.com" target="_blank">
            <img src={githubIcon} alt="GitHub Icon" />
          </a>
          <a href="https://linkedin.com" target="_blank">
            <img src={linkedInIcon} alt="LinkedIn Icon" />
          </a>
        </span>
        <p className={styles.description}>
          With a passion for developing modern web applications for commercial
          businesses.
        </p>
        <a href={CV} target="_blank" download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
