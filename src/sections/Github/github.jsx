import styles from "./githubStyles.module.css";

const github = () => {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Github</h1>

      <div className={styles.skillList}>
        {/* <SkillList checkMarkIcon={checkMarkIcon} skill={"Redux"} /> */}
      </div>
    </section>
  );
};

export default github;
