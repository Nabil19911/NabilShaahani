import WorkExperienceStyle from "./style/WorkExperience.module.css";

const WorkExperience = ({ name, data }) => {
  return (
    <div className={WorkExperienceStyle.work_experience}>
      <h2>
        {name["position"]}, <br />
        <span>{name["company"]}</span>
      </h2>
      <div>
        <h2>
          <i>Responsibility</i>
        </h2>
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkExperience;
