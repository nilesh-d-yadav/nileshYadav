function SkillList(props) {
  return (
    <span>
      <img src={props.checkMarkIcon} alt="" />
      <p>{props.skill}</p>
    </span>
  );
}

export default SkillList;
