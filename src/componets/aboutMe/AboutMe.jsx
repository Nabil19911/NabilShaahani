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
            Hey everyone, I would like to introduce myself as a passionated
            self-taught frontend developer.
          </p>
          <p>
            After working as IT technician for 6 years I found my passion for
            coding, since then I have been working on my skill and I enjoying
            coding every day.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
