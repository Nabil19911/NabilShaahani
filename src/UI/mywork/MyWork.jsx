import PortfolioStyle from "./style/MyWork.module.css";

const MyWork = ({ imageSrc, heading, skills, demoLink, sourceLink }) => {
  return (
    <div className={PortfolioStyle.wrapper}>
      <img src={imageSrc} alt={heading} aria-hidden="true" />
      <div className={PortfolioStyle.detail_wrapper}>
        <div className={PortfolioStyle.detail}>
          <h1>{heading}</h1>
          <div className={PortfolioStyle.skill}>
            <p>
              {skills.map((skill, index) => (
                <span key={index}>{skill}</span>
              ))}
            </p>
          </div>
          <div className={PortfolioStyle.links}>
            <a href={demoLink} target="_blank" rel="noreferrer">
              Demo
            </a>
            <a href={sourceLink} target="_blank" rel="noreferrer">
              Source
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyWork;
