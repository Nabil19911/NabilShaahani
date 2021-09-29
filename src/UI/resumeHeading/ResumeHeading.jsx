import ResumeHeadingStyle from "./style/ResumeHeading.module.css";

const ResumeHeading = ({ children }) => {
  return (
    <div className={ResumeHeadingStyle.wrapper}>
      <h2>{children}</h2>
    </div>
  );
};

export default ResumeHeading;
