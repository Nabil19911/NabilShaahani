import Heading from "../../UI/headings/Heading";
import AboutMeStyle from "./style/AboutMe.module.css";

const AboutMe = () => {
  return (
    <div className={AboutMeStyle.container}>
      <div className={AboutMeStyle.image_wrapper}>
        <img
          src="../asserts/background/Background_image.png"
          alt="My Image"
          aria-hidden="true"
        />
      </div>
      <div className={AboutMeStyle.detail_wrapper}>
        <Heading>About me</Heading>
        <div className={AboutMeStyle.detail}>
          <p>
            I am a self-taught front-end developer with a passion for solving
            problems, and a quick learner willing to adapt to new technologies
            better suits for the business needs.
          </p>
          <p>
            After working as an IT technician for 6+ years, I found my passion
            for coding. From the movement, I produce 'Hello World' from my
            computer, I know this is what I want to do rest of my life. Since
            then, I have been working on my skills and enjoying coding every
            single day.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
