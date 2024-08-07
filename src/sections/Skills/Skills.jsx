import styles from "./SkillsStyles.module.css";
import checkMarkIcon from "../../assets/checkmark-dark.svg";
import SkillList from "../../common/SkillList.jsx";
function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList checkMarkIcon={checkMarkIcon} skill={"HTML"} />
        <SkillList checkMarkIcon={checkMarkIcon} skill={"CSS"} />
        <SkillList checkMarkIcon={checkMarkIcon} skill={"JavaScript"} />
        <SkillList checkMarkIcon={checkMarkIcon} skill={"C++"} />
        <SkillList checkMarkIcon={checkMarkIcon} skill={"Python"} />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList checkMarkIcon={checkMarkIcon} skill={"React"} />
        <SkillList checkMarkIcon={checkMarkIcon} skill={"CSS"} />
        <SkillList checkMarkIcon={checkMarkIcon} skill={"Tailwind CSS"} />
        <SkillList checkMarkIcon={checkMarkIcon} skill={"Bootstrap"} />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList checkMarkIcon={checkMarkIcon} skill={"Node"} />

        <SkillList checkMarkIcon={checkMarkIcon} skill={"Postman API"} />
        <SkillList checkMarkIcon={checkMarkIcon} skill={"Git & Github"} />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList checkMarkIcon={checkMarkIcon} skill={"Firebase"} />
        <SkillList checkMarkIcon={checkMarkIcon} skill={"SQL"} />
        <SkillList checkMarkIcon={checkMarkIcon} skill={"MongoDB"} />
        <SkillList checkMarkIcon={checkMarkIcon} skill={"Git & Github"} />
      </div>
    </section>
  );
}

export default Skills;
