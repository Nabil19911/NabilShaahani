import Heading from "../../UI/headings/Heading";
import ResumeContent from "../../UI/ResumeContent/ResumeContent";
import ResumeHeading from "../../UI/resumeHeading/ResumeHeading";
import WorkExperience from "../../UI/workExperience/WorkExperience";
import ResumeStyle from "./style/Resume.module.css";

const programmingSkill = [
  "Html5",
  "CSS3 (SaSS)",
  "Bootstrap-5",
  "Jquery",
  "JavaScrip (React)",
  "Python",
];
const designSkill = ["Figma", "Photoshop", "Illustrato"];

const tech = [
  "Installing software and hardwares.",
  "Configue computer networks.",
  "Maintaining equipments.",
  "Troubleshooting computer issues.",
];
const sales = [
  "Selling products and services using solid argument to prospective customers.",
  "Estabilish, develop and maintain positive business and customer relationship.",
];

const Resume = () => {
  return (
    <div className={ResumeStyle.container}>
      <Heading>resume</Heading>
      <div className={ResumeStyle.wrapper}>
        <div className={ResumeStyle.skills}>
          <ResumeContent heading="Technical skills" data={programmingSkill} />
          <ResumeContent heading="design skills" data={designSkill} />
        </div>
        <div className={ResumeStyle.workExperience__wrapper}>
          <ResumeHeading>Work Experiences</ResumeHeading>
          <WorkExperience
            name={{
              position: "Computer technician",
              company: "Night Vision Gaming center ltd",
            }}
            data={tech}
          />
          <WorkExperience
            name={{
              position: "Sales Reprasentive",
              company: "Ceylon Biscut ltd",
            }}
            data={sales}
          />
          <br />
          <a href="..\asserts\download\NABILSHAAHANI.pdf" target="_blank">
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
