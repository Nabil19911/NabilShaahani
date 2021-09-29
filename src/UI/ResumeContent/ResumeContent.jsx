import ResumeHeading from "../resumeHeading/ResumeHeading";
import ResumeContentStyle from "./style/ResumeContent.module.css";

const ResumeContent = ({ heading, data }) => {
  return (
    <div className={ResumeContentStyle.wrapper}>
      <ResumeHeading>{heading}</ResumeHeading>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <p>{item}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ResumeContent;
